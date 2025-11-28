# How to Enable SSL/HTTPS for ironwatchsecurity.ca

## What is SSL/HTTPS?

- **HTTP:** `http://ironwatchsecurity.ca` (not secure, shows "Not secure" in browser)
- **HTTPS:** `https://ironwatchsecurity.ca` (secure, shows padlock icon)
- **SSL Certificate:** Makes your website secure and trusted

---

## Step-by-Step: Enable SSL in GoDaddy

### Method 1: Enable SSL in Hosting Dashboard (Easiest)

#### Step 1: Access Hosting Dashboard
1. Log in to [GoDaddy.com](https://www.godaddy.com)
2. Go to **My Products** → **Web Hosting** → **Manage**
3. You should see your domain `ironwatchsecurity.ca`

#### Step 2: Find SSL Section
1. In Hosting Dashboard, look for:
   - **"SSL"** section
   - **"Security"** section
   - **"SSL Certificate"** option
   - Or **"Let's Encrypt"** option

2. **Common locations:**
   - Left sidebar menu
   - Settings section
   - Security tab
   - Or search for "SSL" in the dashboard

#### Step 3: Install/Enable SSL
1. Click on **"SSL"** or **"Security"**
2. Find your domain: `ironwatchsecurity.ca`
3. Look for one of these buttons:
   - **"Install SSL"**
   - **"Enable SSL"**
   - **"Get SSL Certificate"**
   - **"Activate"**
   - **"Let's Encrypt"** (free SSL)

4. Click the button to enable SSL
5. Wait 10-30 minutes for SSL to activate

#### Step 4: Verify SSL is Active
1. After 10-30 minutes, visit: `https://ironwatchsecurity.ca`
2. You should see a padlock icon 🔒 in the address bar
3. The URL should show `https://` (not `http://`)

---

### Method 2: Enable SSL in cPanel

#### Step 1: Access cPanel
1. In Hosting Dashboard, click **"cPanel Admin"** button
2. cPanel opens in a new tab

#### Step 2: Find SSL/TLS Section
1. In cPanel, search for **"SSL"** in the search bar (top)
2. Or look for **"Security"** section
3. Click on **"SSL/TLS Status"** or **"Let's Encrypt"**

#### Step 3: Install SSL Certificate
1. Find your domain: `ironwatchsecurity.ca`
2. Click **"Run AutoSSL"** or **"Install"** button
3. Or use **"Let's Encrypt"** (free SSL option)
4. Click **"Issue"** or **"Install"**
5. Wait for installation to complete

#### Step 4: Force HTTPS (Optional but Recommended)
1. In cPanel, go to **"File Manager"**
2. Navigate to `public_html` folder
3. Look for `.htaccess` file (or create one)
4. Add this code to `.htaccess`:
   ```apache
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```
5. Save the file

---

## Quick Steps Summary

1. **Go to Hosting Dashboard**
2. **Find SSL/Security section**
3. **Click "Install SSL" or "Enable SSL"**
4. **Wait 10-30 minutes**
5. **Visit `https://ironwatchsecurity.ca`**
6. **See padlock icon** ✅

---

## Force HTTPS Redirect

After SSL is enabled, force all traffic to use HTTPS:

### Option 1: Using .htaccess File

1. **In cPanel, open File Manager**
2. **Go to `public_html` folder**
3. **Find or create `.htaccess` file**
4. **Add this code:**
   ```apache
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```
5. **Save the file**

This automatically redirects `http://` to `https://`

### Option 2: In Hosting Dashboard

Some GoDaddy hosting plans have a **"Force HTTPS Redirect"** toggle:
1. Go to **Settings** → **Security**
2. Look for **"Force HTTPS"** or **"HTTPS Redirect"**
3. Toggle it **ON**
4. Save changes

---

## Troubleshooting

### SSL Not Activating After 30 Minutes
- **Problem:** SSL taking too long
- **Solution:**
  - Wait up to 24 hours (sometimes takes longer)
  - Clear browser cache
  - Try accessing `https://ironwatchsecurity.ca` in incognito mode
  - Contact GoDaddy support

### "Not Secure" Still Showing
- **Problem:** SSL installed but browser shows warning
- **Solution:**
  - Clear browser cache (Ctrl+F5)
  - Make sure you're using `https://` (not `http://`)
  - Wait a bit longer for SSL to fully activate
  - Check if SSL is actually installed in dashboard

### Mixed Content Warning
- **Problem:** Some resources loading over HTTP
- **Solution:**
  - Make sure all images, CSS, JS use relative paths or HTTPS
  - Update any external links to use HTTPS
  - Check browser console (F12) for specific errors

### SSL Certificate Expired
- **Problem:** SSL certificate expired
- **Solution:**
  - Let's Encrypt certificates auto-renew
  - If expired, reinstall SSL certificate
  - Contact GoDaddy support if needed

---

## Types of SSL Certificates

### Free SSL (Let's Encrypt)
- ✅ **Free**
- ✅ **Auto-renewal**
- ✅ **Perfect for most websites**
- ✅ **Recommended for your site**

### Paid SSL Certificates
- More features
- Extended validation
- Usually not needed for basic websites

**For your website, free Let's Encrypt SSL is perfect!**

---

## After SSL is Enabled

### What Changes:
- ✅ Website accessible at `https://ironwatchsecurity.ca`
- ✅ Padlock icon in browser
- ✅ "Secure" label in address bar
- ✅ Better SEO ranking
- ✅ More trustworthy to visitors

### Test Your SSL:
1. Visit: `https://ironwatchsecurity.ca`
2. Check for padlock icon 🔒
3. Click padlock to see certificate details
4. Test all pages work with HTTPS

---

## Quick Checklist

- [ ] SSL section found in Hosting Dashboard or cPanel
- [ ] SSL certificate installed/enabled
- [ ] Waited 10-30 minutes for activation
- [ ] Tested `https://ironwatchsecurity.ca`
- [ ] Padlock icon visible in browser
- [ ] Force HTTPS redirect enabled (optional)
- [ ] All pages load with HTTPS

---

## Need Help?

- **GoDaddy SSL Help:** [https://www.godaddy.com/help/ssl-certificates](https://www.godaddy.com/help/ssl-certificates)
- **GoDaddy Support:** [https://www.godaddy.com/help](https://www.godaddy.com/help)
- **SSL Checker:** [https://www.sslshopper.com/ssl-checker.html](https://www.sslshopper.com/ssl-checker.html)

---

## Quick Reference

**Before SSL:**
- `http://ironwatchsecurity.ca` (not secure)

**After SSL:**
- `https://ironwatchsecurity.ca` (secure) ✅

**Enable SSL:**
1. Hosting Dashboard → SSL section
2. Click "Install SSL" or "Enable SSL"
3. Wait 10-30 minutes
4. Done! 🎉

---

**Follow these steps and your website will be secure with HTTPS!** 🔒


