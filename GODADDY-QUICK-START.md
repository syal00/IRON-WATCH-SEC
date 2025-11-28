# 🚀 Quick Start: Deploy to GoDaddy Hosting

## Fastest Way (15 minutes)

### Step 1: Access File Manager
1. Log in to [GoDaddy.com](https://www.godaddy.com)
2. **My Products** → **Web Hosting** → **Manage**
3. Click **"File Manager"** or **"Files"**
4. Open **`public_html`** folder

### Step 2: Upload Files
1. **Delete** any default files in `public_html`
2. Click **"Upload"** button
3. Upload these files:
   - ✅ `index.html`
   - ✅ `styles.css`
   - ✅ `script.js`
4. Upload **`images/`** folder (with all images inside)

### Step 3: Verify Structure
Your `public_html` should have:
```
public_html/
├── index.html
├── styles.css
├── script.js
└── images/
    └── (all your images)
```

### Step 4: Test
1. Visit: `http://ironwatchsecurity.ca`
2. Wait 5-10 minutes if it doesn't load immediately
3. Check that everything displays correctly

### Step 5: Enable HTTPS
1. In Hosting Dashboard → **SSL** or **Security**
2. Click **"Install SSL"** or **"Enable"**
3. Wait 10-30 minutes
4. Visit: `https://ironwatchsecurity.ca`

**Done! Your website is live! 🎉**

---

## ⚠️ Before Going Live

1. **Update Phone Number** in `index.html`:
   - Line 98: `tel:+10000000000` → your number
   - Line 471: `(+1) 000-000-0000` → your number

2. **Configure EmailJS** (so contact form works):
   - See `EMAILJS-SETUP-GUIDE.md`
   - Update `script.js` with your EmailJS credentials

---

## Need Detailed Instructions?

See **`GODADDY-HOSTING-DEPLOYMENT.md`** for complete guide.

---

## Troubleshooting

**Website shows file list?**
→ Make sure `index.html` is in `public_html/` root

**Images not loading?**
→ Check `images/` folder is uploaded correctly

**CSS not working?**
→ Verify `styles.css` is in `public_html/` root

**Domain not working?**
→ Check DNS settings, wait 24-48 hours



