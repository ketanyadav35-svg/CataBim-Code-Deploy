# CATABIM Backend Implementation Guide - Phase 1B Part 1

## Completed Setup

### Database
- ✅ Prisma ORM configured with PostgreSQL (Neon)
- ✅ Complete schema with all models: User, Student, Course, Service, Project, BlogPost, FAQ, Testimonial, Payment, Order, Invoice, Receipt, MediaItem, WebsiteSettings, CMSContent
- ✅ Database migrations applied

### Authentication
- ✅ NextAuth configured with Credentials provider
- ✅ Admin-only authentication
- ✅ API route: `/app/api/auth/[...nextauth]/route.ts`
- ✅ Configuration: `/lib/auth.ts`

### Validation
- ✅ Zod schemas for all forms: StudentRegistration, QuoteRequest, ContactMessage, Course, Service, Project, BlogPost, FAQ, Testimonial, WebsiteSettings
- ✅ Location: `/lib/validations.ts`

### Server Actions
- ✅ Student management: `/app/actions/students.ts`
  - `registerStudent()` - Create new student
  - `getStudents()` - List with search, filter, pagination
  - `getStudentById()` - Get details
  - `updateStudent()` - Edit student
  - `deleteStudent()` - Remove student

## Next Steps to Complete Phase 1B Part 1

### 1. Additional Server Actions (Create similar files for each module)

**File: `/app/actions/quotes.ts`**
- `submitQuoteRequest()` - Create quote request
- `getQuoteRequests()` - List with filters and pagination
- `updateQuoteStatus()` - Change status (new → in_progress → completed)
- `deleteQuoteRequest()` - Remove

**File: `/app/actions/contact.ts`**
- `submitContactMessage()` - Create contact message
- `getContactMessages()` - List all
- `markAsRead()` - Mark single as read
- `markAsUnread()` - Mark single as unread
- `deleteContactMessage()` - Remove
- `getUnreadCount()` - Get count of unread

**File: `/app/actions/courses.ts`**
- `createCourse()` - Add course
- `updateCourse()` - Edit course
- `deleteCourse()` - Remove course
- `publishCourse()` - Set isPublished = true
- `unpublishCourse()` - Set isPublished = false
- `getCourses()` - List with pagination
- `getCourseBySlug()` - Get single

**File: `/app/actions/services.ts`**
- Similar CRUD operations for services
- Include publish/hide operations

**File: `/app/actions/projects.ts`**
- CRUD operations
- Support multiple image uploads (ProjectImage model)
- Filter by industry and service

**File: `/app/actions/blog.ts`**
- CRUD for BlogPost
- Manage categories
- Schedule publishing
- Draft/Publish workflow

**File: `/app/actions/faqs.ts`**
- CRUD operations
- Reorder functionality

**File: `/app/actions/testimonials.ts`**
- CRUD operations
- Publish/hide

**File: `/app/actions/settings.ts`**
- Get website settings
- Update settings (upsert pattern)

### 2. API Routes for Admin Dashboard

**File: `/app/api/admin/dashboard/route.ts`**
```
GET - Returns dashboard statistics:
- Total students
- Total quote requests
- Total contact messages
- Total blog posts
- Total projects
- Total courses
- Recent registrations (last 5)
- Recent quote requests (last 5)
- Recent contact messages (last 5)
```

**File: `/app/api/admin/export/route.ts`**
```
POST /api/admin/export/students - Export students to CSV/Excel
POST /api/admin/export/quotes - Export quote requests
POST /api/admin/export/contacts - Export contact messages
```

### 3. Admin Pages (Create route handlers and components)

**File: `/app/admin/layout.tsx`**
- Protected layout with authentication check
- Sidebar navigation
- Header with user info and logout

**File: `/app/admin/page.tsx`**
- Dashboard with statistics
- Recent activity cards
- Charts (optional)
- Quick actions

**File: `/app/admin/students/page.tsx`**
- Students list with search, filter, pagination
- Action buttons: View, Edit, Delete
- Export CSV/Excel

**File: `/app/admin/students/[id]/page.tsx`**
- Student details
- Edit form
- Payment/enrollment status
- Admin notes

**File: `/app/admin/quotes/page.tsx`**
- Quote requests list
- Status updates (dropdown)
- Bulk actions

**File: `/app/admin/contacts/page.tsx`**
- Contact messages
- Read/Unread indicator
- Delete option

**File: `/app/admin/courses/page.tsx`**
- Course management
- Create/Edit/Delete buttons
- Publish toggle

**File: `/app/admin/courses/[id]/edit.tsx`**
- Course form with all fields
- FAQs section (nested management)
- Banner image upload

**File: `/app/admin/services/page.tsx`**
- Service management similar to courses

**File: `/app/admin/projects/page.tsx`**
- Project list with image previews
- Create/Edit/Delete

**File: `/app/admin/projects/[id]/edit.tsx`**
- Project form
- Multiple image upload
- Technology tags

**File: `/app/admin/blog/page.tsx`**
- Blog posts list
- Status indicators (draft/published/scheduled)
- Category filter

**File: `/app/admin/blog/[id]/edit.tsx`**
- Rich text editor for content
- Featured image upload
- Category selection
- SEO fields

**File: `/app/admin/faqs/page.tsx`**
- FAQ management
- Drag-to-reorder functionality

**File: `/app/admin/testimonials/page.tsx`**
- Testimonial management
- Image upload

**File: `/app/admin/settings/page.tsx`**
- Website settings form
- Company information
- Social media links
- Working hours

### 4. Media Library Implementation

**File: `/app/api/admin/media/upload/route.ts`**
- Handle file uploads
- Store metadata in MediaItem table
- Support multiple files

**File: `/app/api/admin/media/delete/route.ts`**
- Delete media files

**File: `/app/admin/media/page.tsx`**
- Media library interface
- Upload section
- Gallery view with metadata

### 5. Payment Architecture

**File: `/app/actions/payments.ts`**
- `createOrder()` - Create order for student
- `createPayment()` - Create payment record
- `updatePaymentStatus()` - Update after gateway response
- `generateInvoice()` - Create invoice record
- `generateReceipt()` - Create receipt record
- `getOrdersByStudent()` - Get student's orders

**File: `/app/api/admin/payments/route.ts`**
- GET - List all payments with filters

### 6. Frontend Forms Components

**File: `/components/admin/StudentForm.tsx`**
- Form for creating/editing students

**File: `/components/admin/CourseForm.tsx`**
- Form for creating/editing courses

**File: `/components/admin/ProjectForm.tsx`**
- Form for creating/editing projects

**File: `/components/admin/BlogForm.tsx`**
- Form with rich text editor

**File: `/components/admin/SettingsForm.tsx`**
- Settings form with validation

### 7. Export Functionality

Install: `pnpm add xlsx csv-parser`

**File: `/lib/export.ts`**
- `exportToCSV()` - Export data to CSV
- `exportToExcel()` - Export data to Excel

### 8. Error Handling Components

**File: `/app/admin/error.tsx`**
- Error boundary for admin pages

**File: `/app/admin/not-found.tsx`**
- 404 page for admin

**File: `/app/error.tsx`**
- Global error page

**File: `/app/not-found.tsx`**
- Global 404 page

### 9. Middleware & Protection

**File: `/middleware.ts`**
```typescript
import { auth } from '@/lib/auth'

export async function middleware(request: Request) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const session = await auth()
    if (!session || session.user?.role !== 'admin') {
      return Response.redirect(new URL('/admin/login', request.url))
    }
  }
}
```

### 10. Documentation Files

**File: `/API_DOCUMENTATION.md`**
- Document all API endpoints
- Request/response examples

**File: `/.env.example`**
```
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=your-secret-here
NEXTAUTH_URL=http://localhost:3000
```

**File: `/DATABASE_SCHEMA.md`**
- Explain all models and relationships

**File: `/DEPLOYMENT_GUIDE.md`**
- Instructions for deploying to Vercel

**File: `/ADMIN_USER_GUIDE.md`**
- Guide for admin panel usage

## Installation & Setup

```bash
# Install dependencies
pnpm install

# Setup environment variables
cp .env.example .env.local
# Add your DATABASE_URL and generate NEXTAUTH_SECRET

# Create admin user (optional script)
node scripts/create-admin.ts

# Run migrations
pnpm exec prisma migrate dev

# Start development server
pnpm dev
```

## Key Features to Implement

### Dashboard
- Real-time statistics cards
- Recent activity feed
- Quick action buttons
- Charts (optional: recharts)

### Student Management
- Detailed filters and search
- Bulk edit/delete
- Export to CSV/Excel
- Email notifications on registration

### Payment System
- Order creation
- Payment status tracking
- Invoice generation
- Receipt creation
- Payment gateway prep (Razorpay ready but not integrated)

### Blog CMS
- Rich text editor
- Schedule publishing
- Category management
- SEO optimization fields

### Media Library
- Drag-and-drop upload
- Image preview
- File organization
- Storage integration ready

## Security Considerations

- ✅ Admin routes protected with NextAuth
- ✅ Role-based access control (admin only)
- ✅ Password hashing with bcrypt
- ✅ Zod validation on server side
- ✅ CSRF protection from NextAuth

## Performance Optimizations

- Use pagination for large lists
- Index database queries
- Lazy load components in admin
- Image optimization
- Cache static content

## Testing Considerations

- Unit tests for server actions
- Integration tests for API routes
- E2E tests for admin workflows
- Form validation tests

## Next Phase (Phase 1B Part 2)

After completing the above:
1. Integrate payment gateway (Razorpay)
2. Add email notifications
3. Implement file storage (Vercel Blob/Cloudinary)
4. Add advanced analytics
5. Implement caching strategy
6. Add logging and monitoring
