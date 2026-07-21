import { z } from 'zod'

// Student Registration
export const studentRegistrationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  qualification: z.string().min(1, 'Qualification is required'),
  currentProfession: z.string().optional(),
  selectedCourse: z.string().min(1, 'Please select a course'),
  preferredBatch: z.string().optional(),
  message: z.string().optional(),
})

export type StudentRegistration = z.infer<typeof studentRegistrationSchema>

// Quote Request
export const quoteRequestSchema = z.object({
  name: z.string().optional(),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  company: z.string().optional(),
  projectType: z.string().min(1, 'Project type is required'),
  service: z.string().optional(),
  description: z.string().optional(),
  timeline: z.string().optional(),
  budget: z.string().optional(),
})

export type QuoteRequest = z.infer<typeof quoteRequestSchema>

// Contact Message
export const contactMessageSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactMessage = z.infer<typeof contactMessageSchema>

// Course
export const courseSchema = z.object({
  name: z.string().min(1, 'Course name is required'),
  slug: z.string().min(1, 'Slug is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  detailedDescription: z.string().optional(),
  banner: z.string().optional(),
  autodesk_badge: z.string().optional(),
  duration: z.string().optional(),
  level: z.string().optional(),
  price: z.string().optional(),
  curriculum: z.string().optional(),
  isPublished: z.boolean().default(false),
})

export type CourseInput = z.infer<typeof courseSchema>

// Service
export const serviceSchema = z.object({
  name: z.string().min(1, 'Service name is required'),
  slug: z.string().min(1, 'Slug is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  detailedDescription: z.string().optional(),
  icon: z.string().optional(),
  image: z.string().optional(),
  features: z.string().optional(),
  cta: z.string().optional(),
  isPublished: z.boolean().default(true),
  isVisible: z.boolean().default(true),
})

export type ServiceInput = z.infer<typeof serviceSchema>

// Project
export const projectSchema = z.object({
  name: z.string().min(1, 'Project name is required'),
  slug: z.string().min(1, 'Slug is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  detailedDescription: z.string().optional(),
  coverImage: z.string().optional(),
  industry: z.string().min(1, 'Industry is required'),
  serviceId: z.string().optional(),
  softwaresUsed: z.string().optional(),
  challenge: z.string().optional(),
  solution: z.string().optional(),
  deliverables: z.string().optional(),
  isPublished: z.boolean().default(true),
})

export type ProjectInput = z.infer<typeof projectSchema>

// Blog Post
export const blogPostSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  content: z.string().min(10, 'Content must be at least 10 characters'),
  excerpt: z.string().optional(),
  featuredImage: z.string().optional(),
  categoryId: z.string().optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  status: z.enum(['draft', 'published', 'scheduled']).default('draft'),
  publishedAt: z.date().optional(),
  scheduledFor: z.date().optional(),
  readingTime: z.number().optional(),
})

export type BlogPostInput = z.infer<typeof blogPostSchema>

// FAQ
export const faqSchema = z.object({
  question: z.string().min(1, 'Question is required'),
  answer: z.string().min(10, 'Answer must be at least 10 characters'),
  courseId: z.string().optional(),
  order: z.number().default(0),
  isPublished: z.boolean().default(true),
  isVisible: z.boolean().default(true),
})

export type FAQInput = z.infer<typeof faqSchema>

// Testimonial
export const testimonialSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  role: z.string().optional(),
  company: z.string().optional(),
  image: z.string().optional(),
  content: z.string().min(10, 'Content must be at least 10 characters'),
  rating: z.number().min(1).max(5).optional(),
  isPublished: z.boolean().default(true),
  isVisible: z.boolean().default(true),
})

export type TestimonialInput = z.infer<typeof testimonialSchema>

// Website Settings
export const websiteSettingsSchema = z.object({
  companyName: z.string().min(1, 'Company name is required'),
  companyLogo: z.string().optional(),
  advisorPhoneNumber: z.string().optional(),
  officePhoneNumber: z.string().optional(),
  companyEmail: z.string().email().optional(),
  officeAddress: z.string().optional(),
  googleMapsUrl: z.string().optional(),
  workingHours: z.string().optional(),
  facebookUrl: z.string().optional(),
  instagramUrl: z.string().optional(),
  linkedinUrl: z.string().optional(),
  youtubeUrl: z.string().optional(),
  whatsappNumber: z.string().optional(),
})

export type WebsiteSettingsInput = z.infer<typeof websiteSettingsSchema>
