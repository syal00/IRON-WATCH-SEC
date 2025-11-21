# Email Section Setup Guide

## Current Status

✅ **Contact Form**: Working and functional
✅ **Form Validation**: All required fields validated
✅ **API Route**: `/api/contact` is set up and working
⚠️ **Email Sending**: Currently in **DEV MODE** (logs to console only)

## How It Currently Works

### Development Mode (Current)
- Form submissions are **logged to the console** (not sent as emails)
- You'll see: `📧 Contact Form Submission (Dev Mode - Email not sent)`
- This allows you to test the form without email configuration

### Production Mode (Requires Setup)
- Form submissions are **sent as actual emails** to `ironwatchsec.services@gmail.com`
- Requires SMTP credentials to be configured

## To Enable Email Sending

### Step 1: Create `.env.local` file

Create a file named `.env.local` in the project root with your SMTP credentials:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_TO=ironwatchsec.services@gmail.com
NODE_ENV=production
```

### Step 2: Get Gmail App Password (if using Gmail)

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Go to App Passwords: https://myaccount.google.com/apppasswords
4. Generate an app password for "Mail"
5. Use that password in `SMTP_PASS`

### Step 3: Restart the Server

After adding `.env.local`, restart your Next.js server:
```bash
npm run dev
```

### Step 4: Test the Form

1. Fill out the contact form
2. Submit it
3. Check `ironwatchsec.services@gmail.com` for the email

## Testing Current Functionality

### Test in Console (Current Dev Mode)

1. Open your browser's Developer Tools (F12)
2. Go to the Console tab
3. Submit the contact form
4. You should see the form data logged in the console

### Check API Route

Visit: `http://localhost:3000/api/contact` (should show error if accessed via GET, but route exists)

## Email Content

When working, emails will include:
- Name
- Company (if provided)
- Email
- Phone
- Site Address
- Service Type
- Message/Requirements
- Timestamp

## Troubleshooting

### Form Not Submitting
- Check browser console for errors (F12)
- Verify all required fields are filled
- Check network tab for API call to `/api/contact`

### Email Not Sending (Production)
- Verify `.env.local` file exists
- Check SMTP credentials are correct
- Ensure Gmail App Password is used (not regular password)
- Check server console for error messages
- Verify `NODE_ENV=production` is set

### Form Shows Success but No Email
- Check spam folder
- Verify `CONTACT_TO` email address is correct
- Check server logs for SMTP errors

## Alternative Email Services

You can use other SMTP providers:

### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-username
SMTP_PASS=your-mailgun-password
```


