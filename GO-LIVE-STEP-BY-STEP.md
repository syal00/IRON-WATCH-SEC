# 🚀 Make ironwatchsecurity.ca Live - Step by Step

## Complete Guide to Deploy Your Website

### Step 1: Access Your GoDaddy Hosting (2 minutes)

1. **Log in to GoDaddy:**
   - Go to [https://www.godaddy.com](https://www.godaddy.com)
   - Click **"Sign In"** (top right)
   - Enter your credentials

2. **Open Hosting Dashboard:**
   - Click **"My Products"** (top right)
   - Find **"Web Hosting"** section
   - Click **"Manage"** button

3. **Open cPanel:**
   - Click the **"cPanel Admin"** button (top right)
   - cPanel will open in a new tab

---

### Step 2: Upload Your Website Files (5 minutes)

1. **Open File Manager:**
   - In cPanel, find **"Files"** section
   - Click **"File Manager"** icon
   - A file browser window opens

2. **Navigate to public_html:**
   - In the left sidebar, click **"public_html"** folder
   - This is where your website files go
   - **Important:** Make sure you're inside `public_html` folder

3. **Delete Default Files (if any):**
   - If you see `index.html` or other default files, delete them
   - Right-click → **"Delete"**

4. **Upload Your Files:**
   - Click **"Upload"** button at the top
   - Upload these 4 items:
     - ✅ `index.html`
     - ✅ `styles.css`
     - ✅ `script.js`
     - ✅ `images/` folder (entire folder)
   - Wait for upload to complete
   - Close upload window

5. **Verify Files Are There:**
   - You should see in `public_html`:
     ```
     public_html/
     ├── index.html
     ├── styles.css
     ├── script.js
     └── images/
         ├── mainlogo.png
         ├── logo.svg
         └── (other images)
     ```

---

### Step 3: Connect Your Domain (3 minutes)

**If domain and hosting are on the same GoDaddy account:**

1. **In Hosting Dashboard:**
   - Go to **"Settings"** or **"Domain"** section
   - Look for **"Primary Domain"** or **"Domain"**
   - Click **"Change"** or **"Add Domain"**
   - Select `ironwatchsecurity.ca`
   - Save changes

**If you need to configure DNS manually:**

1. **Go to Domain Settings:**
   - Go to **"My Products"** → **"Domains"**
   - Click on `ironwatchsecurity.ca`
   - Click **"DNS"** or **"Manage DNS"**

2. **Update DNS Records:**
   - Find **A Record** for `@` (or blank):
     - **Type:** A
     - **Name:** @ (or leave blank)
     - **Value:** Your hosting IP address (shown in Hosting Dashboard)
     - **TTL:** 600
   - Find or create **CNAME** for `www`:
     - **Type:** CNAME
     - **Name:** www
     - **Value:** `ironwatchsecurity.ca`
     - **TTL:** 600

---

### Step 4: Enable SSL/HTTPS (5 minutes)

1. **In Hosting Dashboard:**
   - Go to **"SSL"** or **"Security"** section
   - Look for **"SSL Certificate"** or **"Let's Encrypt"**
   - Click **"Install"** or **"Enable"** for `ironwatchsecurity.ca`
   - Wait 10-30 minutes for SSL to activate

2. **Force HTTPS (Optional but Recommended):**
   - In cPanel, go to **"File Manager"**
   - Open `public_html` folder
   - If you uploaded `.htaccess` file, it should already have HTTPS redirect
   - If not, create/edit `.htaccess` file with:
     ```apache
     RewriteEngine On
     RewriteCond %{HTTPS} off
     RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
     ```

---

### Step 5: Test Your Website (2 minutes)

1. **Wait 5-10 minutes** after uploading files

2. **Test Your Website:**
   - Visit: `http://ironwatchsecurity.ca`
   - Or: `https://ironwatchsecurity.ca` (after SSL is active)
   - Check:
     - [ ] Homepage loads
     - [ ] Logo displays correctly
     - [ ] Navigation works
     - [ ] All sections display
     - [ ] Contact form shows
     - [ ] Images load properly

3. **Test on Mobile:**
   - Open on your phone
   - Check mobile menu works
   - Verify everything looks good

---

### Step 6: Final Configuration (Before Going Live)

**Update Phone Number:**
1. In File Manager, open `index.html`
2. Find line 98: `tel:+10000000000`
3. Replace with your actual phone number
4. Find line 471: `(+1) 000-000-0000`
5. Replace with your actual phone number
6. Save and re-upload the file

**Configure EmailJS (So Contact Form Works):**
1. Follow `EMAILJS-SETUP-GUIDE.md`
2. Get your EmailJS credentials
3. Edit `script.js` file
4. Update lines 127-129 with your:
   - Public Key
   - Service ID
   - Template ID
5. Save and re-upload `script.js`

---

## ⚠️ Important Checklist Before Going Live

- [ ] All files uploaded to `public_html/`
- [ ] `index.html` is in root of `public_html/`
- [ ] `images/` folder uploaded with all images
- [ ] Phone number updated in `index.html`
- [ ] EmailJS configured in `script.js`
- [ ] Domain connected to hosting
- [ ] SSL certificate enabled
- [ ] Website loads at `ironwatchsecurity.ca`
- [ ] Contact form works (test it!)
- [ ] Mobile version looks good

---

## Troubleshooting

### Website Shows "Index of" or File List
- **Problem:** `index.html` not found
- **Solution:** Make sure `index.html` is in `public_html/` root folder

### Domain Not Working
- **Problem:** DNS not configured
- **Solution:** 
  - Check DNS settings in GoDaddy
  - Wait 24-48 hours for DNS propagation
  - Use [whatsmydns.net](https://www.whatsmydns.net/) to check

### Images Not Loading
- **Problem:** Wrong file paths
- **Solution:** 
  - Verify `images/` folder is in `public_html/`
  - Check file names match exactly (case-sensitive)

### Contact Form Not Working
- **Problem:** EmailJS not configured
- **Solution:** Follow `EMAILJS-SETUP-GUIDE.md`

### HTTPS Not Working
- **Problem:** SSL not installed
- **Solution:**
  - Install SSL certificate in Hosting Dashboard
  - Wait 10-30 minutes
  - Clear browser cache

---

## Quick Reference

**Files to Upload:**
- `index.html`
- `styles.css`
- `script.js`
- `images/` folder

**Where to Upload:**
- `public_html/` folder in GoDaddy hosting

**Test URL:**
- `http://ironwatchsecurity.ca` (before SSL)
- `https://ironwatchsecurity.ca` (after SSL)

---

## Need Help?

- **GoDaddy Support:** [https://www.godaddy.com/help](https://www.godaddy.com/help)
- **cPanel Help:** [https://www.godaddy.com/help/file-manager-16037](https://www.godaddy.com/help/file-manager-16037)
- **DNS Checker:** [https://www.whatsmydns.net/](https://www.whatsmydns.net/)

---

**Follow these steps and your website will be live at ironwatchsecurity.ca! 🎉**


