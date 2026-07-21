# CATABIM Project Setup Guide

## Quick Start

### 1. Environment Setup

```bash
# Copy environment template
cp .env.example .env.local

# Generate NextAuth secret
openssl rand -base64 32

# Update .env.local with:
# - DATABASE_URL from Neon
# - NEXTAUTH_SECRET from command above
# - NEXTAUTH_URL (http://localhost:3000 for dev)
```

### 2. Database Setup

```bash
# The Prisma schema has already been migrated
# If you need to run migrations again:
pnpm exec prisma migrate dev

# Or create a new migration after schema changes:
pnpm exec prisma migrate dev --name <migration-name>
```

### 3. Create Admin User

```bash
# Run the script to create admin user
pnpm tsx scripts/create-admin.ts

# This will create:
# Email: admin@catabim.com
# Password: AdminPassword123! (change this!)
```

### 4. Start Development Server

```bash
# Install dependencies (if not already done)
pnpm install

# Start dev server
pnpm dev

# Open http://localhost:3000
```

### 5. Access Admin Dashboard

- Navigate to: `http://localhost:3000/admin/login`
- Email: `admin@catabim.com`
- Password: `AdminPassword123!`
- Change password after first login!

## Project Structure

```
app/
  admin/
    login/page.tsx          # Admin login page
    layout.tsx              # Admin layout with sidebar
    page.tsx                # Dashboard
    students/              # (to be implemented)
    courses/               # (to be implemented)
    services/              # (to be implemented)
    projects/              # (to be implemented)
    blog/                  # (to be implemented)
    quotes/                # (to be implemented)
    contacts/              # (to be implemented)
    testimonials/          # (to be implemented)
    faqs/                  # (to be implemented)
    media/                 # (to be implemented)
    settings/              # (to be implemented)
  api/
    auth/[...nextauth]/route.ts  # NextAuth API
  actions/
    students.ts            # Student server actions
    (more to be added)

lib/
  auth.ts                   # NextAuth configuration
  prisma.ts                 # Prisma client
  validations.ts            # Zod schemas

prisma/
  schema.prisma             # Database schema
  migrations/               # Database migrations

scripts/
  create-admin.ts           # Create admin user script
```

## Key Files & Their Purpose

### Authentication
- `lib/auth.ts` - NextAuth configuration with Credentials provider
- `app/api/auth/[...nextauth]/route.ts` - NextAuth API endpoint
- `app/admin/login/page.tsx` - Admin login page

### Database
- `prisma/schema.prisma` - Complete database schema
- `lib/prisma.ts` - Prisma client singleton

### Validation
- `lib/validations.ts` - Zod schemas for all forms

### Server Actions
- `app/actions/students.ts` - Student management actions
- (More to be created for other modules)

## Next Steps

Refer to `BACKEND_IMPLEMENTATION.md` for the complete implementation roadmap and what needs to be built.

## Available Scripts

```bash
# Development
pnpm dev                    # Start dev server
pnpm build                  # Build for production
pnpm start                  # Start production server

# Database
pnpm exec prisma studio    # Open Prisma Studio (GUI for database)
pnpm exec prisma migrate dev  # Run migrations
pnpm exec prisma db seed   # Seed database (if seed file exists)

# Admin User
pnpm tsx scripts/create-admin.ts  # Create admin user

# Type Generation
pnpm exec prisma generate  # Generate Prisma types
```

## Troubleshooting

### Can't connect to database?
- Check DATABASE_URL in .env.local
- Ensure Neon database is running and accessible
- Verify connection string format

### Admin login not working?
- Ensure admin user was created: `pnpm tsx scripts/create-admin.ts`
- Check email and password are correct
- Verify NEXTAUTH_SECRET is set

### Prisma client not found?
- Run `pnpm exec prisma generate` to regenerate
- Clear node_modules and reinstall: `rm -rf node_modules && pnpm install`

### Port 3000 already in use?
```bash
# Kill process on port 3000 (Linux/Mac)
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 pnpm dev
```

## Security Notes

- Always change default admin password after first login
- Keep NEXTAUTH_SECRET safe and secret
- Never commit .env.local to git
- Use strong passwords for admin accounts
- Enable 2FA when implementing (future)

## Performance Tips

- Use Prisma Studio to monitor queries
- Check database indexes in schema
- Use pagination for large lists
- Implement caching where appropriate
- Optimize images before upload

## Deployment to Vercel

```bash
# Push code to GitHub
git push origin main

# Connect to Vercel and deploy
vercel

# Set environment variables in Vercel dashboard
# - DATABASE_URL
# - NEXTAUTH_SECRET
# - NEXTAUTH_URL (your production URL)
```

## Support & Documentation

- Prisma: https://www.prisma.io/docs/
- NextAuth.js: https://next-auth.js.org/
- Zod: https://zod.dev/
- Next.js: https://nextjs.org/docs

## Implementation Status

Phase 1B Part 1 - Backend Infrastructure:
- ✅ Prisma + PostgreSQL setup
- ✅ NextAuth authentication
- ✅ Database schema with all models
- ✅ Zod validation schemas
- ✅ Server actions for students
- ✅ Admin login page
- ✅ Admin dashboard layout
- 🔄 Remaining: Complete admin pages for all modules

See `BACKEND_IMPLEMENTATION.md` for detailed roadmap.
