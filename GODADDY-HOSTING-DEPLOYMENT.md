# Deploy to GoDaddy Web Hosting

## Step-by-Step Guide for ironwatchsecurity.ca

### Step 1: Access Your GoDaddy Hosting

1. Log in to [GoDaddy.com](https://www.godaddy.com)
2. Go to **"My Products"** (top right)
3. Find **"Web Hosting"** section
4. Click **"Manage"** next to your hosting plan
5. You'll be taken to the **GoDaddy Hosting Dashboard**

---

### Step 2: Access File Manager

**Option A: Using File Manager (Easiest - No software needed)**

1. In the Hosting Dashboard, look for **"Files"** or **"File Manager"**
2. Click **"File Manager"** or **"Files"**
3. Navigate to the **`public_html`** folder (this is your website root)
   - This is where all your website files go
   - Files in `public_html` will be accessible at `ironwatchsecurity.ca`

**Option B: Using FTP (Advanced - Faster for large files)**

1. In Hosting Dashboard, find **"FTP"** section
2. Note your FTP credentials:
   - **FTP Host:** Usually `ftp.yourdomain.com` or an IP address
   - **FTP Username:** Your hosting username
   - **FTP Password:** Your hosting password
3. Use an FTP client like:
   - **FileZilla** (free): [filezilla-project.org](https://filezilla-project.org/)
   - **WinSCP** (Windows): [winscp.net](https://winscp.net/)
   - Or use File Manager in GoDaddy

---

### Step 3: Upload Your Website Files

**Using File Manager:**

1. Make sure you're in the **`public_html`** folder
2. **Delete** any default files (like `index.html` or `cgi-bin` if empty)
3. **Upload** your files:

   **Method 1: Upload Individual Files**
   - Click **"Upload"** or **"Upload Files"** button
   - Select files one by one:
     - `index.html`
     - `styles.css`
     - `script.js`
   - Click **"Upload"**

   **Method 2: Upload Folder (if available)**
   - Click **"Upload"** → **"Upload Folder"**
   - Select your `images` folder
   - Upload it

4. **Create folder structure:**
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

**Using FTP (FileZilla):**

1. Open FileZilla
2. Enter your FTP credentials:
   - **Host:** Your FTP hostname
   - **Username:** Your FTP username
   - **Password:** Your FTP password
   - **Port:** 21 (usually)
3. Click **"Quickconnect"**
4. On the right side, navigate to **`public_html`**
5. On the left side, navigate to your local project folder
6. **Drag and drop** files from left to right:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `images/` folder (drag entire folder)

---

### Step 4: Verify File Structure

Your `public_html` folder should look like this:

```
public_html/
├── index.html          ← Main page (must be named exactly "index.html")
├── styles.css          ← Stylesheet
├── script.js           ← JavaScript
└── images/             ← Images folder
    ├── mainlogo.png
    ├── logo.svg
    └── (other images)
```

**Important:**
- `index.html` must be in the root of `public_html`
- File names are **case-sensitive** on some servers
- Make sure `images/` folder is uploaded correctly

---

### Step 5: Connect Your Domain

**If domain and hosting are on the same GoDaddy account:**

1. In Hosting Dashboard, go to **"Settings"** or **"Domain"**
2. Your domain should automatically be connected
3. If not, click **"Add Domain"** and select `ironwatchsecurity.ca`

**If domain is separate or needs manual setup:**

1. Go to **"My Products"** → **"Domains"**
2. Click on `ironwatchsecurity.ca`
3. Click **"DNS"** or **"Manage DNS"**
4. Update **A Record**:
   - **Type:** A
   - **Name:** @ (or leave blank)
   - **Value:** Your hosting IP address (found in Hosting Dashboard)
   - **TTL:** 600
5. Update **CNAME for www**:
   - **Type:** CNAME
   - **Name:** www
   - **Value:** `ironwatchsecurity.ca`
   - **TTL:** 600

---

### Step 6: Test Your Website

1. Wait 5-10 minutes for files to process
2. Visit: `http://ironwatchsecurity.ca`
3. Check:
   - [ ] Homepage loads
   - [ ] Logo displays correctly
   - [ ] Navigation works
   - [ ] Contact form displays
   - [ ] All images load
   - [ ] CSS styles apply correctly

---

### Step 7: Enable HTTPS (SSL Certificate)

GoDaddy usually provides free SSL certificates:

1. In Hosting Dashboard, go to **"SSL"** or **"Security"**
2. Look for **"SSL Certificate"** or **"Let's Encrypt"**
3. Click **"Install"** or **"Enable"** for your domain
4. Wait 10-30 minutes for SSL to activate
5. Your site will be available at `https://ironwatchsecurity.ca`

**Force HTTPS (Optional):**
- In Hosting Dashboard, look for **"HTTPS Redirect"** or **".htaccess"**
- Enable **"Force HTTPS"** or add redirect rules

---

## Troubleshooting

### Website shows "Index of" or file list
- **Problem:** `index.html` not found or wrong location
- **Solution:** Make sure `index.html` is in `public_html/` root folder

### Images not loading
- **Problem:** Wrong file paths or case sensitivity
- **Solution:** 
  - Check `images/` folder is uploaded
  - Verify file names match exactly (case-sensitive)
  - Check paths in HTML: `images/mainlogo.png` (not `Images/mainlogo.png`)

### CSS not working
- **Problem:** `styles.css` not found or wrong path
- **Solution:** 
  - Verify `styles.css` is in `public_html/` root
  - Check HTML link: `<link rel="stylesheet" href="styles.css">`

### JavaScript not working
- **Problem:** `script.js` not found or errors
- **Solution:**
  - Verify `script.js` is in `public_html/` root
  - Check browser console (F12) for errors
  - Make sure EmailJS is configured

### Domain not working
- **Problem:** DNS not pointing to hosting
- **Solution:**
  - Check DNS settings in GoDaddy
  - Verify A record points to hosting IP
  - Wait 24-48 hours for DNS propagation
  - Use [whatsmydns.net](https://www.whatsmydns.net/) to check

### Contact form not sending emails
- **Problem:** EmailJS not configured
- **Solution:** Follow `EMAILJS-SETUP-GUIDE.md` to configure EmailJS

---

## File Permissions (If Needed)

If you have issues, check file permissions:

1. In File Manager, right-click on files
2. Select **"Change Permissions"** or **"CHMOD"**
3. Set permissions:
   - **Files:** `644` (read/write for owner, read for others)
   - **Folders:** `755` (read/write/execute for owner, read/execute for others)

---

## GoDaddy-Specific Tips

1. **cPanel Access:** Some GoDaddy hosting uses cPanel
   - Look for **"cPanel"** button in Hosting Dashboard
   - Use **"File Manager"** in cPanel

2. **PHP Version:** Not needed for static HTML site, but if you see PHP errors:
   - Go to **"Settings"** → **"PHP Version"**
   - Select latest stable version

3. **Error Logs:** If something breaks:
   - Check **"Error Logs"** in Hosting Dashboard
   - Look for file path or permission errors

4. **Backup:** Before making changes:
   - Use **"Backup"** feature in Hosting Dashboard
   - Or download files via FTP as backup

---

## Quick Checklist

Before going live, make sure:

- [ ] All files uploaded to `public_html/`
- [ ] `index.html` is in root of `public_html/`
- [ ] `images/` folder uploaded with all images
- [ ] Phone number updated in `index.html`
- [ ] EmailJS configured (see `EMAILJS-SETUP-GUIDE.md`)
- [ ] Domain connected to hosting
- [ ] SSL certificate enabled
- [ ] Test website loads correctly
- [ ] Test contact form works

---

## Need Help?

- **GoDaddy Support:** [https://www.godaddy.com/help](https://www.godaddy.com/help)
- **GoDaddy Hosting Help:** [https://www.godaddy.com/help/web-hosting](https://www.godaddy.com/help/web-hosting)
- **File Manager Guide:** [https://www.godaddy.com/help/use-the-file-manager-16036](https://www.godaddy.com/help/use-the-file-manager-16036)

---

## Alternative: Use GoDaddy Website Builder

If you have GoDaddy Website Builder (not hosting), you'll need to:
1. Use the website builder interface
2. Or upgrade to Web Hosting plan
3. Or use the hosting plan you purchased

**Your website files are ready to upload!** 🚀



