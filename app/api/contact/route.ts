import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  company?: string
  email: string
  phone: string
  siteAddress: string
  serviceType: string
  message?: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.siteAddress || !body.serviceType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // In development mode, if SMTP env vars are missing, just log the payload
    const isDev = process.env.NODE_ENV === 'development'
    const hasSmtpConfig = 
      process.env.SMTP_HOST && 
      process.env.SMTP_PORT && 
      process.env.SMTP_USER && 
      process.env.SMTP_PASS

    if (isDev && !hasSmtpConfig) {
      console.log('📧 Contact Form Submission (Dev Mode - Email not sent):')
      console.log('=====================================')
      console.log(JSON.stringify(body, null, 2))
      console.log('=====================================')
      console.log('Set SMTP environment variables to enable email sending in dev mode.')
      
      return NextResponse.json(
        { 
          message: 'Form received (dev mode - email not sent)',
          success: true 
        },
        { status: 200 }
      )
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Verify transporter configuration
    await transporter.verify()

    // Prepare email content
    const recipientEmail = process.env.CONTACT_TO || 'ironwatchsec.services@gmail.com'
    
    const emailSubject = `New Quote Request: ${body.serviceType} - ${body.name}`
    
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #d4af37; color: #1a1a1a; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #d4af37; }
            .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #d4af37; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
              <p>Iron Watch Security - Quote Request</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${body.name}</div>
              </div>
              
              ${body.company ? `
              <div class="field">
                <div class="label">Company:</div>
                <div class="value">${body.company}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${body.email}</div>
              </div>
              
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${body.phone}</div>
              </div>
              
              <div class="field">
                <div class="label">Site Address:</div>
                <div class="value">${body.siteAddress.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div class="field">
                <div class="label">Service Type:</div>
                <div class="value">${body.serviceType}</div>
              </div>
              
              ${body.message ? `
              <div class="field">
                <div class="label">Message / Requirements:</div>
                <div class="value">${body.message.replace(/\n/g, '<br>')}</div>
              </div>
              ` : ''}
              
              <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
              
              <p style="color: #666; font-size: 12px;">
                This email was sent from the Iron Watch Security contact form.<br>
                Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'America/Toronto' })}
              </p>
            </div>
          </div>
        </body>
      </html>
    `

    const emailText = `
New Contact Form Submission - Iron Watch Security

Name: ${body.name}
${body.company ? `Company: ${body.company}\n` : ''}Email: ${body.email}
Phone: ${body.phone}
Site Address: ${body.siteAddress}
Service Type: ${body.serviceType}
${body.message ? `Message:\n${body.message}\n` : ''}

---
Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'America/Toronto' })}
    `

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: recipientEmail,
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
      replyTo: body.email,
    })

    return NextResponse.json(
      { message: 'Email sent successfully', success: true },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}


