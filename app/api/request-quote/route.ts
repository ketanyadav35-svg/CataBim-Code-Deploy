import { z } from 'zod'
import { Resend } from 'resend'

const requestQuoteSchema = z.object({
  email: z.string().email(),
  phone: z.string().min(5),
  name: z.string().optional(),
  company: z.string().optional(),
  description: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const validatedData = requestQuoteSchema.parse(data)

    if (!process.env.RESEND_API_KEY) {
      console.error('[Request Quote] RESEND_API_KEY is missing')

      return Response.json(
        {
          success: false,
          message: 'Email service is not configured',
        },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const { data: emailData, error } = await resend.emails.send({
      from: 'CataBIM Website <noreply@catabim.com>',
      to: ['info@catabim.com'],
      replyTo: validatedData.email,
      subject: `New Quote Request${validatedData.name ? ` - ${validatedData.name}` : ''}`,
      html: `
        <h2>New Quote Request</h2>

        <p><strong>Name:</strong> ${validatedData.name || 'Not provided'}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Company:</strong> ${validatedData.company || 'Not provided'}</p>

        <h3>Project Description</h3>
        <p>${validatedData.description || 'Not provided'}</p>

        <hr />

        <p>This quote request was submitted through the CataBIM website.</p>
      `,
    })

    if (error) {
      console.error('[Request Quote] Resend error:', error)

      return Response.json(
        {
          success: false,
          message: 'Failed to send quote request',
        },
        { status: 500 }
      )
    }

    console.log('[Request Quote] Email sent:', emailData?.id)

    return Response.json(
      {
        success: true,
        message: 'Thank you for your request. We will get back to you soon.',
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        {
          success: false,
          message: 'Invalid form data',
          errors: error.issues,
        },
        { status: 400 }
      )
    }

    console.error('[Request Quote] Error:', error)

    return Response.json(
      {
        success: false,
        message: 'Failed to process your request',
      },
      { status: 500 }
    )
  }
}