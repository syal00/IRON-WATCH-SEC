# Pre-Deployment Checklist for ironwatchsecurity.ca

Use this checklist before going live to ensure everything is ready!

## ✅ Essential Configuration

### 1. Contact Information
- [ ] Update phone number in `index.html` (currently shows `(+1) 000-000-0000`)
  - Line 98: Hero section "Call Now" button
  - Line 471-473: Footer contact section
- [ ] Verify email address is correct: `ironwatchsec.services@gmail.com`
- [ ] Test phone number link works on mobile

### 2. EmailJS Setup
- [ ] EmailJS account created at [emailjs.com](https://www.emailjs.com/)
- [ ] Email service connected (Gmail, Outlook, etc.)
- [ ] Email template created with all variables
- [ ] Public Key added to `script.js` (line 127)
- [ ] Service ID added to `script.js` (line 128)
- [ ] Template ID added to `script.js` (line 129)
- [ ] Test form submission works and sends email

### 3. Domain & DNS
- [ ] Domain `ironwatchsecurity.ca` purchased from GoDaddy
- [ ] Hosting service chosen (Netlify recommended)
- [ ] DNS records configured in GoDaddy
- [ ] SSL certificate enabled (automatic with Netlify/Vercel)

### 4. Content Review
- [ ] All text is accurate and professional
- [ ] No placeholder text remaining
- [ ] Company information is correct
- [ ] Service descriptions are accurate
- [ ] Testimonials are appropriate (if using real ones)

### 5. Images & Assets
- [ ] Logo displays correctly (no black background)
- [ ] All images load properly
- [ ] Images are optimized (not too large)
- [ ] Alt text added to all images

### 6. Functionality Testing
- [ ] Navigation menu works on desktop
- [ ] Mobile menu works on mobile devices
- [ ] Smooth scrolling works
- [ ] Contact form validates correctly
- [ ] Form submission sends email successfully
- [ ] All links work (internal and external)
- [ ] Social media links updated (if applicable)

### 7. Browser Testing
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge
- [ ] Test on mobile (iOS Safari)
- [ ] Test on mobile (Android Chrome)

### 8. Performance
- [ ] Page loads quickly (< 3 seconds)
- [ ] Images are optimized
- [ ] No console errors (check F12)
- [ ] No broken links

### 9. SEO Basics
- [ ] Page title is descriptive
- [ ] Meta description is set (line 6 of index.html)
- [ ] All headings are properly structured (h1, h2, h3)
- [ ] Images have alt text

### 10. Legal & Compliance
- [ ] Privacy policy page (if collecting data)
- [ ] Terms of service (if needed)
- [ ] Copyright year is current (automatic in footer)

---

## 🚀 Quick Deployment Steps

1. **Update Phone Number:**
   ```html
   <!-- Find and replace in index.html -->
   tel:+10000000000 → tel:+1YOUR-ACTUAL-NUMBER
   (+1) 000-000-0000 → (+1) YOUR-ACTUAL-NUMBER
   ```

2. **Configure EmailJS:**
   - Follow `EMAILJS-SETUP-GUIDE.md`
   - Update `script.js` line 127-129

3. **Deploy to Netlify:**
   - Follow `DEPLOYMENT-GUIDE.md`
   - Or drag & drop files to Netlify

4. **Connect Domain:**
   - Add domain in Netlify
   - Update DNS in GoDaddy
   - Wait 1-2 hours for propagation

5. **Test Everything:**
   - Visit `https://ironwatchsecurity.ca`
   - Test contact form
   - Test on mobile
   - Check all links

---

## 📝 Files to Deploy

**Required Files:**
- ✅ `index.html`
- ✅ `styles.css`
- ✅ `script.js`
- ✅ `images/` folder (all images)
- ✅ `netlify.toml` (for Netlify deployment)

**Optional Files:**
- Documentation files (*.md) - not needed for website
- `app/` folder - Next.js files, not needed
- `components/` folder - Next.js components, not needed
- `node_modules/` - not needed

---

## ⚠️ Common Issues to Check

- [ ] Phone number placeholder still showing
- [ ] EmailJS not configured (form won't send emails)
- [ ] Logo has black background (should be transparent)
- [ ] Images not loading (check file paths)
- [ ] Domain not working (check DNS settings)
- [ ] HTTPS not working (wait for SSL certificate)

---

## 🎯 After Going Live

1. **Monitor:**
   - Check email for form submissions
   - Monitor website analytics (if set up)
   - Check for any errors

2. **Update:**
   - Keep content fresh
   - Update testimonials
   - Add new services if needed

3. **Maintain:**
   - Keep EmailJS account active
   - Renew domain annually
   - Backup your files

---

## 📞 Need Help?

- **Deployment Issues:** See `DEPLOYMENT-GUIDE.md`
- **EmailJS Setup:** See `EMAILJS-SETUP-GUIDE.md`
- **Netlify Support:** [support.netlify.com](https://support.netlify.com)
- **GoDaddy Support:** [godaddy.com/help](https://www.godaddy.com/help)

---

**Ready to deploy?** ✅ Complete the checklist above, then follow `DEPLOYMENT-GUIDE.md`!



