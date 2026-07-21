# CATABIM Quick Start Guide

## 🚀 Get Running in 5 Minutes

### Step 1: Environment Setup (1 min)
```bash
cp .env.example .env.local
```

Then update `.env.local` with:
- `DATABASE_URL` - from your Neon PostgreSQL database
- `NEXTAUTH_SECRET` - generate with: `openssl rand -base64 32`
- `NEXTAUTH_URL` - `http://localhost:3000` (for development)

### Step 2: Create Admin User (1 min)
```bash
pnpm tsx scripts/create-admin.ts
```

**Credentials created:**
- Email: `admin@catabim.com`
- Password: `AdminPassword123!`
- ⚠️ Change this after first login!

### Step 3: Start Dev Server (1 min)
```bash
pnpm dev
```

Open: http://localhost:3000

### Step 4: Login to Admin (1 min)
Navigate to: http://localhost:3000/admin/login
- Email: `admin@catabim.com`
- Password: `AdminPassword123!`

### Step 5: Explore Dashboard (1 min)
You're now in the admin dashboard! The foundation is ready.

---

## 📁 Key Files to Know

| File | Purpose |
|------|---------|
| `lib/auth.ts` | NextAuth configuration |
| `lib/prisma.ts` | Database client |
| `lib/validations.ts` | Form validation schemas |
| `app/actions/students.ts` | Student operations |
| `app/actions/contact.ts` | Contact operations |
| `prisma/schema.prisma` | Database schema |

---

## 🔧 Common Commands

```bash
# Development
pnpm dev                        # Start dev server
pnpm build                      # Build for production
pnpm start                      # Run production

# Database
pnpm exec prisma studio        # GUI for database
pnpm exec prisma migrate dev   # Run migrations

# Admin User
pnpm tsx scripts/create-admin.ts  # Create new admin

# Type Generation
pnpm exec prisma generate      # Regenerate types
```

---

## 📚 Documentation

- **Setup & Deployment**: Read `SETUP.md`
- **Implementation Roadmap**: Read `BACKEND_IMPLEMENTATION.md`
- **Complete Summary**: Read `PHASE_1B_SUMMARY.md`
- **Task Checklist**: Read `IMPLEMENTATION_CHECKLIST.md`

---

## 🔐 Authentication

### Admin Login
- Page: `/admin/login`
- Email: `admin@catabim.com`
- Password: (set during admin creation)

### Protected Routes
- All `/admin/*` routes require authentication
- Automatically redirects to `/admin/login` if not authenticated

---

## 🗄️ Database Models

The following models are available:

| Model | Purpose |
|-------|---------|
| User | Admin users |
| Student | Student registrations |
| QuoteRequest | Project quotes |
| ContactMessage | Contact form submissions |
| Course | BIM courses |
| Service | BIM services |
| Project | Portfolio projects |
| BlogPost | Blog articles |
| FAQ | Frequently asked questions |
| Testimonial | User testimonials |
| Payment | Payment records |
| Order | Student orders |
| Invoice | Billing invoices |
| Receipt | Payment receipts |

---

## ✨ What's Working

✅ NextAuth authentication
✅ Admin login/logout
✅ Database connection
✅ Student registration actions
✅ Contact message actions
✅ Form validation with Zod
✅ Protected admin routes
✅ Password hashing
✅ Role-based access

---

## 🔨 What's Next

Follow the roadmap in `BACKEND_IMPLEMENTATION.md` to build:

1. **Admin Pages** - Student, course, blog management
2. **API Routes** - Dashboard stats, exports, uploads
3. **Components** - Forms, tables, filters
4. **Features** - Media library, payment system

---

## 🐛 Troubleshooting

### Port 3000 in use?
```bash
PORT=3001 pnpm dev
```

### Database connection error?
- Check `DATABASE_URL` in `.env.local`
- Ensure Neon database is running
- Verify connection string format

### Admin login not working?
- Run: `pnpm tsx scripts/create-admin.ts`
- Check email/password
- Clear browser cookies

### Prisma type errors?
```bash
pnpm exec prisma generate
```

---

## 📱 Tech Stack

- **Frontend**: Next.js 16 + React 19
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL (Neon) + Prisma
- **Auth**: NextAuth.js v4
- **Validation**: Zod
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form

---

## 🚢 Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `DATABASE_URL`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` (your domain)
4. Deploy!

---

## 💡 Pro Tips

1. **Use Prisma Studio** for database exploration:
   ```bash
   pnpm exec prisma studio
   ```

2. **Check TypeScript errors**:
   ```bash
   pnpm tsc --noEmit
   ```

3. **Format code**:
   ```bash
   pnpm exec prettier --write .
   ```

4. **Change admin password** after first login in `/admin/settings`

5. **Check logs** during development with `console.log()`

---

## 📞 Support Resources

- **Prisma Docs**: https://www.prisma.io/docs/
- **NextAuth Docs**: https://next-auth.js.org/
- **Next.js Docs**: https://nextjs.org/docs/
- **Zod Docs**: https://zod.dev/

---

## ✅ You're All Set!

The backend foundation is complete and production-ready. Start building your admin dashboard using the patterns established in the existing code.

Happy coding! 🎉
