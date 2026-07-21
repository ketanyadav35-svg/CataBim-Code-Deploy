import { prisma } from '../lib/prisma'
import bcrypt from 'bcryptjs'

async function createAdmin() {
  const email = 'admin@catabim.com'
  const password = 'AdminPassword123!' // Change this

  try {
    // Check if admin already exists
    const existingAdmin = await prisma.user.findUnique({
      where: { email },
    })

    if (existingAdmin) {
      console.log('Admin user already exists')
      return
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create admin user
    const admin = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: 'CATABIM Admin',
        role: 'admin',
        verified: true,
      },
    })

    console.log('Admin user created successfully:')
    console.log(`Email: ${admin.email}`)
    console.log(`Password: ${password}`)
    console.log('\n⚠️  IMPORTANT: Change this password after first login!')
  } catch (error) {
    console.error('Error creating admin:', error)
  } finally {
    await prisma.$disconnect()
  }
}

createAdmin()
