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

    // ---------------------------------------------------------
    // 1. Send notification to CataBIM
    // ---------------------------------------------------------

    const { data: adminEmailData, error: adminEmailError } =
      await resend.emails.send({
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

    if (adminEmailError) {
      console.error('[Request Quote] Admin email error:', adminEmailError)

      return Response.json(
        {
          success: false,
          message: 'Failed to send quote request',
        },
        { status: 500 }
      )
    }

    console.log(
      '[Request Quote] Admin email sent:',
      adminEmailData?.id
    )

    // ---------------------------------------------------------
    // 2. Send confirmation to customer
    // ---------------------------------------------------------

    const { data: customerEmailData, error: customerEmailError } =
      await resend.emails.send({
        from: 'CataBIM <noreply@catabim.com>',
        to: [validatedData.email],
        subject: 'We received your CataBIM quote request',
        html: `
          <h2>Thank you for contacting CataBIM</h2>

          <p>
            Hi ${validatedData.name || 'there'},
          </p>

          <p>
            Thank you for submitting your quote request to CataBIM.
            We have received your request successfully.
          </p>

          <p>
            Our team will review your requirements and get back to you
            within 24 business hours.
          </p>

          <h3>Your submitted details</h3>

          <p><strong>Phone:</strong> ${validatedData.phone}</p>
          <p><strong>Company:</strong> ${validatedData.company || 'Not provided'}</p>

          <h3>Project Description</h3>

          <p>${validatedData.description || 'Not provided'}</p>

          <hr />

          <p>
            Regards,<br />
            <strong>CataBIM Team</strong><br />
            info@catabim.com<br />
            +91 7304274792
          </p>
        `,
      })

    if (customerEmailError) {
      console.error(
        '[Request Quote] Customer confirmation email error:',
        customerEmailError
      )

      // Admin email was already sent successfully.
      // Return success because the quote request itself was received.
      return Response.json(
        {
          success: true,
          message:
            'Your quote request was received successfully. We will get back to you soon.',
          adminEmailSent: true,
          customerEmailSent: false,
        },
        { status: 200 }
      )
    }

    console.log(
      '[Request Quote] Customer confirmation sent:',
      customerEmailData?.id
    )

    return Response.json(
      {
        success: true,
        message:
          'Your quote request was received successfully. A confirmation email has been sent to you.',
        adminEmailSent: true,
        customerEmailSent: true,
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