import { z } from 'zod'

const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
})

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Validate the email
    const validatedData = newsletterSchema.parse(data)
    
    // Here you can:
    // 1. Save to a database
    // 2. Add to an email marketing service (Mailchimp, Convertkit, etc.)
    // 3. Send a confirmation email
    
    console.log('[Newsletter] New subscriber:', validatedData.email)
    
    // For now, just return success
    // In production, implement actual subscription handling
    return Response.json(
      {
        success: true,
        message: 'Successfully subscribed to newsletter',
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        {
          success: false,
          message: 'Invalid email address',
        },
        { status: 400 }
      )
    }
    
    return Response.json(
      {
        success: false,
        message: 'Failed to subscribe to newsletter',
      },
      { status: 500 }
    )
  }
}
