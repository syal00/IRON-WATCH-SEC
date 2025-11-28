# Deploy Iron Watch Security Website to ironwatchsecurity.ca

## Quick Deployment Options

### Option 1: Netlify (Recommended - Easiest & Free)

Netlify is the easiest way to deploy your static website for free.

#### Step 1: Prepare Your Files
Your website is already ready! The main files you need are:
- `index.html`
- `styles.css`
- `script.js`
- `images/` folder
- Any other assets

#### Step 2: Deploy to Netlify

**Method A: Drag & Drop (Easiest)**
1. Go to [https://app.netlify.com/](https://app.netlify.com/)
2. Sign up for a free account (or log in)
3. Click **"Add new site"** → **"Deploy manually"**
4. Drag and drop your entire project folder (or just the files needed)
5. Wait for deployment to complete
6. You'll get a URL like `your-site-name.netlify.app`

**Method B: Connect to GitHub (Recommended for Updates)**
1. Push your code to GitHub (you already have it at `https://github.com/syal00/IRON-WATCH-SEC.git`)
2. Go to [https://app.netlify.com/](https://app.netlify.com/)
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **GitHub** and authorize Netlify
5. Select your repository: `IRON-WATCH-SEC`
6. Configure build settings:
   - **Build command:** Leave empty (static site)
   - **Publish directory:** `/` (root)
7. Click **"Deploy site"**

#### Step 3: Connect Your GoDaddy Domain

1. In Netlify dashboard, go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter: `ironwatchsecurity.ca`
4. Netlify will show you DNS records to add

#### Step 4: Configure DNS in GoDaddy

1. Log in to [GoDaddy.com](https://www.godaddy.com)
2. Go to **My Products** → **Domains**
3. Click on `ironwatchsecurity.ca`
4. Click **"DNS"** or **"Manage DNS"**
5. Add/Update these DNS records:

**Option A: Use Netlify's Nameservers (Easiest)**
- Delete existing nameservers
- Add Netlify's nameservers (shown in Netlify dashboard):
  - `dns1.p01.nsone.net`
  - `dns2.p01.nsone.net`
  - `dns3.p01.nsone.net`
  - `dns4.p01.nsone.net`

**Option B: Keep GoDaddy Nameservers (Use A/CNAME Records)**
- Add an **A Record**:
  - Type: `A`
  - Name: `@` (or leave blank)
  - Value: `75.2.60.5` (Netlify's IP - check Netlify docs for current IP)
  - TTL: `600`
- Add a **CNAME Record** for www:
  - Type: `CNAME`
  - Name: `www`
  - Value: `your-site-name.netlify.app` (your Netlify URL)
  - TTL: `600`

6. Wait 24-48 hours for DNS propagation (usually takes 1-2 hours)

#### Step 5: Enable HTTPS (Automatic)
- Netlify automatically provides free SSL certificates
- Your site will be available at `https://ironwatchsecurity.ca`

---

### Option 2: Vercel (Also Free & Easy)

#### Step 1: Deploy to Vercel
1. Go to [https://vercel.com/](https://vercel.com/)
2. Sign up with GitHub
3. Click **"Add New Project"**
4. Import your `IRON-WATCH-SEC` repository
5. Configure:
   - **Framework Preset:** Other
   - **Root Directory:** `./`
   - **Build Command:** Leave empty
   - **Output Directory:** `./`
6. Click **"Deploy"**

#### Step 2: Connect Domain
1. Go to **Project Settings** → **Domains**
2. Add `ironwatchsecurity.ca`
3. Follow DNS instructions shown

---

### Option 3: GoDaddy Hosting (If You Have It)

If you purchased hosting from GoDaddy:

1. Log in to GoDaddy
2. Go to **My Products** → **Web Hosting**
3. Use **File Manager** or **FTP** to upload files:
   - Upload `index.html` to `public_html/` folder
   - Upload `styles.css` to `public_html/` folder
   - Upload `script.js` to `public_html/` folder
   - Upload `images/` folder to `public_html/` folder
4. Your site will be live at `ironwatchsecurity.ca`

---

## Pre-Deployment Checklist

Before going live, make sure:

- [ ] EmailJS is configured (see `EMAILJS-SETUP-GUIDE.md`)
- [ ] Phone number is updated in `index.html`
- [ ] All images are loading correctly
- [ ] Test the contact form
- [ ] Test on mobile devices
- [ ] Check all links work

---

## Files Needed for Deployment

Essential files to upload:
```
index.html          (Main page)
styles.css          (All styles)
script.js           (JavaScript functionality)
images/            (Logo and images folder)
```

Optional files (can be excluded):
```
app/                (Next.js files - not needed for static site)
components/         (Next.js components - not needed)
node_modules/       (Not needed)
*.md                (Documentation files - optional)
```

---

## Quick Start: Netlify Drag & Drop

**Fastest way to go live (5 minutes):**

1. **Create a deployment folder:**
   - Create a new folder called `website-deploy`
   - Copy these files into it:
     - `index.html`
     - `styles.css`
     - `script.js`
     - `images/` (entire folder)

2. **Deploy:**
   - Go to [netlify.com](https://app.netlify.com/)
   - Drag the `website-deploy` folder onto Netlify
   - Get your temporary URL

3. **Connect domain:**
   - Add `ironwatchsecurity.ca` in Netlify
   - Update DNS in GoDaddy
   - Wait 1-2 hours

**Done! Your site is live!**

---

## Troubleshooting

### Domain not working after 24 hours
- Check DNS records are correct
- Use [whatsmydns.net](https://www.whatsmydns.net/) to check propagation
- Clear browser cache
- Try accessing via IP or temporary URL

### Images not loading
- Make sure `images/` folder is uploaded
- Check file paths are correct (case-sensitive on some servers)
- Verify image file names match exactly

### Contact form not working
- Make sure EmailJS is configured (see `EMAILJS-SETUP-GUIDE.md`)
- Check browser console for errors (F12)
- Test with EmailJS dashboard

### HTTPS not working
- Netlify/Vercel provide free SSL automatically
- Wait a few minutes after adding domain
- Clear browser cache

---

## Need Help?

- **Netlify Support:** [https://www.netlify.com/support/](https://www.netlify.com/support/)
- **GoDaddy Support:** [https://www.godaddy.com/help](https://www.godaddy.com/help)
- **DNS Checker:** [https://www.whatsmydns.net/](https://www.whatsmydns.net/)

---

## Recommended: Netlify + GitHub

For the best experience:
1. Keep your code on GitHub (already done ✅)
2. Connect GitHub to Netlify
3. Every time you push to GitHub, Netlify automatically updates your live site
4. Free SSL, CDN, and automatic deployments!



