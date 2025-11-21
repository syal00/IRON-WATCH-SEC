# Iron Watch Security - Marketing Website

A production-ready marketing website for Iron Watch Security, a private security company serving Ottawa and surrounding areas.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Nodemailer** (email handling)
- **React Hot Toast** (notifications)

## Features

- 🎨 Dark premium theme with gold accents
- 📱 Fully responsive (mobile-first design)
- ✨ Smooth scroll animations with Framer Motion
- 📧 Contact form with email integration
- 🎯 Single-page scrolling layout
- 🚀 Production-ready code structure

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   
   Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your SMTP credentials:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_TO=ironwatchsec.services@gmail.com
   ```
   
   **Note:** For Gmail, you'll need to:
   - Enable 2-factor authentication
   - Generate an App Password (https://myaccount.google.com/apppasswords)
   - Use the App Password in `SMTP_PASS`

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Development Mode

In development, if SMTP environment variables are not set, the contact form will:
- Log form submissions to the console
- Return a success response (for testing)
- **Not send actual emails**

This allows you to develop and test without email configuration.

## Building for Production

```bash
npm run build
npm start
```

**Important:** Make sure all environment variables are properly configured in your production environment (e.g., Vercel, Netlify, or your hosting provider).

## Customization

### Update Phone Number

Edit `components/Footer.tsx` and update the phone number in the `<a href="tel:...">` tag.

### Update Testimonials

Edit `components/sections/Testimonials.tsx` and update the `testimonials` array with real client feedback.

### Update Service Descriptions

Edit `components/sections/Services.tsx` and modify the `services` array to customize service descriptions.

### Update Company Info

Edit the About section in `components/sections/About.tsx` to update company story and information.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API route for email sending
│   ├── globals.css                # Global styles and Tailwind imports
│   ├── layout.tsx                 # Root layout with Header/Footer
│   └── page.tsx                   # Main landing page
├── components/
│   ├── Header.tsx                 # Sticky navigation header
│   ├── Footer.tsx                 # Footer component
│   └── sections/
│       ├── Hero.tsx               # Hero section
│       ├── About.tsx              # About section
│       ├── Services.tsx           # Services section
│       ├── Industries.tsx         # Industries section
│       ├── Process.tsx            # How it works section
│       ├── Testimonials.tsx       # Testimonials section
│       └── Contact.tsx            # Contact form section
├── .env.example                   # Environment variables template
└── README.md                      # This file
```

## Email Configuration

The contact form sends emails using Nodemailer. Supported SMTP providers include:

- Gmail
- Outlook/Hotmail
- Custom SMTP servers
- SendGrid
- Mailgun
- AWS SES

Consult your email provider's documentation for the correct SMTP settings.

## Deployment

This project can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting provider**

Remember to set environment variables in your hosting platform's dashboard.

## License

Private - Iron Watch Security Inc.

## Support

For questions or issues, contact: ironwatchsec.services@gmail.com


