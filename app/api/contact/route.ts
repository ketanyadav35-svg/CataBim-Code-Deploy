import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10),
  projectType: z.enum(['architectural', 'structural', 'mep', 'infrastructure', 'coordination', 'training', 'other']),
})

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Validate the data
    const validatedData = contactSchema.parse(data)
    
    // Here you can:
    // 1. Save to a database
    // 2. Send an email notification
    // 3. Send to a third-party service (Slack, Zapier, etc.)
    
    console.log('[Contact Form] New submission:', validatedData)
    
    // For now, just return success
    // In production, implement actual email sending or database storage
    return Response.json(
      {
        success: true,
        message: 'Thank you for your inquiry. We will get back to you soon.',
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        {
          success: false,
          message: 'Invalid form data',
          errors: error.errors,
        },
        { status: 400 }
      )
    }
    
    return Response.json(
      {
        success: false,
        message: 'Failed to process your request',
      },
      { status: 500 }
    )
  }
}
