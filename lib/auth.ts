import NextAuth, { type Session } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import type { JWT } from 'next-auth/jwt'

const authConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: { email: String(credentials.email) },
        })

        if (!user || !user.password) {
          return null
        }

        const passwordsMatch = await bcrypt.compare(
          String(credentials.password),
          user.password
        )

        if (!passwordsMatch) {
          return null
        }

        // Only admin users can log in
        if (user.role !== 'admin') {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          role: user.role,
        }
      },
    }),
  ],
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = (user as any).role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        ;(session.user as any).role = token.role
      }
      return session
    },
    async signIn({ user }) {
      // Only allow admin users
      const dbUser = await prisma.user.findUnique({
        where: { id: user.id },
      })
      return dbUser?.role === 'admin' ? true : false
    },
  },
  events: {
    async signIn({ user }) {
      console.log(`User ${user.email} signed in`)
    },
  },
}

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)
