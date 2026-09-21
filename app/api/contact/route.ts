import { z } from 'zod'
import { Resend } from 'resend'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10),
})

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const validatedData = contactSchema.parse(data)

    if (!process.env.RESEND_API_KEY) {
      console.error('[Contact] RESEND_API_KEY is missing')

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
        subject: `New Contact Enquiry - ${validatedData.name}`,
        html: `
          <h2>New Contact Enquiry</h2>

          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${validatedData.company || 'Not provided'}</p>

          <h3>Message</h3>
          <p>${validatedData.message}</p>

          <hr />

          <p>This enquiry was submitted through the CataBIM website.</p>
        `,
      })

    if (adminEmailError) {
      console.error('[Contact] Admin email error:', adminEmailError)

      return Response.json(
        {
          success: false,
          message: 'Failed to send enquiry',
        },
        { status: 500 }
      )
    }

    console.log(
      '[Contact] Admin email sent:',
      adminEmailData?.id
    )

    // ---------------------------------------------------------
    // 2. Send confirmation to customer
    // ---------------------------------------------------------

    const { data: customerEmailData, error: customerEmailError } =
      await resend.emails.send({
        from: 'CataBIM <noreply@catabim.com>',
        to: [validatedData.email],
        subject: 'We received your CataBIM enquiry',
        html: `
          <h2>Thank you for contacting CataBIM</h2>

          <p>
            Hi ${validatedData.name},
          </p>

          <p>
            Thank you for contacting CataBIM.
            We have received your enquiry successfully.
          </p>

          <p>
            Our team will review your message and get back to you soon.
          </p>

          <h3>Your submitted details</h3>

          <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${validatedData.company || 'Not provided'}</p>

          <h3>Message</h3>

          <p>${validatedData.message}</p>

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
        '[Contact] Customer confirmation email error:',
        customerEmailError
      )

      // Admin email was already sent successfully.
      return Response.json(
        {
          success: true,
          message:
            'Your enquiry was received successfully. We will get back to you soon.',
          adminEmailSent: true,
          customerEmailSent: false,
        },
        { status: 200 }
      )
    }

    console.log(
      '[Contact] Customer confirmation sent:',
      customerEmailData?.id
    )

    return Response.json(
      {
        success: true,
        message:
          'Your enquiry was received successfully. A confirmation email has been sent to you.',
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

    console.error('[Contact] Error:', error)

    return Response.json(
      {
        success: false,
        message: 'Failed to process your request',
      },
      { status: 500 }
    )
  }
}