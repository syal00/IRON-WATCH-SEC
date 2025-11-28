# EmailJS Setup Guide for Contact Form

## Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a **free account** (allows 200 emails/month)
3. Verify your email address

### Step 2: Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps
5. **Copy your Service ID** (you'll need this)

### Step 3: Create Email Template
1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use this template:

**Subject:**
```
New Quote Request from {{from_name}}
```

**Content:**
```
You have received a new quote request from your website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Site Address: {{site_address}}
Service Type: {{service_type}}

Message:
{{message}}

---
This email was sent from your Iron Watch Security contact form.
Reply directly to this email to respond to {{from_name}}.
```

4. **Copy your Template ID** (you'll need this)

### Step 4: Get Your Public Key
1. Go to **Account** → **General** in EmailJS dashboard
2. Find **Public Key** section
3. **Copy your Public Key** (you'll need this)

### Step 5: Configure the Website
1. Open `script.js` in your project
2. Find the `EMAILJS_CONFIG` section (around line 115)
3. Replace the placeholder values:

```javascript
const EMAILJS_CONFIG = {
  publicKey: 'YOUR_PUBLIC_KEY',        // ← Paste your Public Key here
  serviceID: 'YOUR_SERVICE_ID',        // ← Paste your Service ID here
  templateID: 'YOUR_TEMPLATE_ID',      // ← Paste your Template ID here
  recipientEmail: 'ironwatchsec.services@gmail.com'  // ← Your email (already set)
};
```

### Step 6: Test the Form
1. Open `index.html` in your browser
2. Fill out the contact form
3. Submit it
4. Check your email inbox!

## Template Variables Available

The form sends these variables to your EmailJS template:
- `{{from_name}}` - Customer's name
- `{{from_email}}` - Customer's email
- `{{phone}}` - Customer's phone number
- `{{company}}` - Company name (or "Not provided")
- `{{site_address}}` - Site address requiring security
- `{{service_type}}` - Type of service requested
- `{{message}}` - Additional message/requirements
- `{{to_email}}` - Your email address
- `{{reply_to}}` - Customer's email (for reply-to header)

## Troubleshooting

### Form shows "Email service is not configured"
- Make sure you've updated all three values in `EMAILJS_CONFIG`
- Check that you didn't leave `YOUR_PUBLIC_KEY`, `YOUR_SERVICE_ID`, or `YOUR_TEMPLATE_ID` as placeholders

### Emails not arriving
- Check your EmailJS dashboard for error logs
- Verify your email service is connected properly
- Check spam/junk folder
- Make sure your template uses the correct variable names

### Getting errors in browser console
- Open browser Developer Tools (F12)
- Check Console tab for specific error messages
- Verify EmailJS script is loading (check Network tab)

## Free Tier Limits

EmailJS free tier includes:
- **200 emails per month**
- All basic features
- Perfect for small businesses

If you need more, upgrade to a paid plan starting at $15/month.

## Alternative: Formspree

If you prefer an even simpler setup, you can use Formspree instead:
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Get your form endpoint URL
4. Update the form tag in `index.html`:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

However, EmailJS is already integrated and recommended for this project.



