# Quick Email Setup Guide

## ✅ Step-by-Step Instructions

### Step 1: Get Gmail App Password

1. **Go to your Google Account**: https://myaccount.google.com/
2. **Enable 2-Factor Authentication** (if not already enabled)
   - Go to Security → 2-Step Verification
   - Follow the setup process
3. **Generate App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" as the app
   - Select "Other (Custom name)" as device
   - Name it: "Iron Watch Security Website"
   - Click "Generate"
   - **Copy the 16-character password** (you'll need this!)

### Step 2: Update .env.local File

1. Open `.env.local` file in your project
2. Replace these values:
   ```env
   SMTP_USER=your-actual-email@gmail.com        # Your Gmail address
   SMTP_PASS=xxxx-xxxx-xxxx-xxxx                # The 16-character App Password from Step 1
   CONTACT_TO=ironwatchsec.services@gmail.com   # Already set (this is the recipient)
   ```

### Step 3: Save and Restart Server

1. **Save** the `.env.local` file
2. **Stop** your Next.js server (Ctrl+C in terminal)
3. **Restart** it:
   ```bash
   npm run dev
   ```

### Step 4: Test It!

1. Go to your website contact form
2. Fill out all required fields
3. Click "Send Request"
4. Check `ironwatchsec.services@gmail.com` inbox for the email!

---

## 🔒 Security Note

- **NEVER commit `.env.local` to git** (it's already in .gitignore)
- The `.env.local` file is for local development
- For production deployment, add these environment variables in your hosting platform

## ⚠️ Troubleshooting

### "Authentication failed" error
- Make sure you're using the **App Password**, not your regular Gmail password
- Verify 2-Factor Authentication is enabled
- Double-check the 16-character password is correct (no spaces)

### "Connection timeout" error
- Check your firewall isn't blocking port 587
- Try `SMTP_PORT=465` with `secure: true` (but code uses port 587)

### Emails not arriving
- Check spam folder
- Verify `CONTACT_TO` email is correct
- Check server console for errors

### Still not working?
- Make sure `.env.local` file is in the **project root** (same folder as `package.json`)
- Verify file is named exactly `.env.local` (not `.env.local.txt`)
- Restart the server after making changes

---

## 📧 Alternative Email Services

If you don't want to use Gmail, here are other options:

### SendGrid (Free tier: 100 emails/day)
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

### Mailgun (Free tier: 5,000 emails/month)
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-username
SMTP_PASS=your-mailgun-password
```

---

**Once you've updated `.env.local` with your credentials, the email system will be fully functional!**


