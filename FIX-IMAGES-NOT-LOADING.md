# Fix: Images Not Loading on Website

## Problem: "Logo failed to load" Error

Your website shows "Logo failed to load" because the images aren't being found by the server.

---

## Quick Fixes (Try These First)

### Fix 1: Verify Images Folder Location

**Check in GoDaddy File Manager:**
1. Open File Manager in cPanel
2. Go to `public_html` folder
3. Check if `images` folder exists
4. Open `images` folder
5. Verify these files are inside:
   - `mainlogo.png`
   - `logo.svg`

**Correct Structure:**
```
public_html/
├── index.html
├── styles.css
├── script.js
└── images/          ← Must be here!
    ├── mainlogo.png ← Must be here!
    ├── logo.svg
    └── README.md
```

**If images folder is missing or empty:**
- Re-upload the `images` folder (see `HOW-TO-UPLOAD-IMAGES-FOLDER.md`)

---

### Fix 2: Check File Permissions

**In GoDaddy File Manager:**
1. Right-click on `images` folder
2. Select **"Change Permissions"** or **"CHMOD"**
3. Set to **755** (read/write/execute for owner, read/execute for others)
4. Click **"Change"**

**For image files:**
1. Right-click on `mainlogo.png`
2. Select **"Change Permissions"**
3. Set to **644** (read/write for owner, read for others)
4. Do the same for `logo.svg`

---

### Fix 3: Verify File Names (Case-Sensitive)

**Important:** File names are case-sensitive on servers!

**Check these match exactly:**
- HTML uses: `images/mainlogo.png`
- File on server must be: `mainlogo.png` (lowercase 'm')
- NOT: `MainLogo.png` or `MAINLOGO.PNG`

**In File Manager:**
1. Open `images` folder
2. Check file names are exactly:
   - `mainlogo.png` (all lowercase)
   - `logo.svg` (all lowercase)

**If file names are wrong:**
1. Rename files to lowercase
2. Or update HTML to match actual file names

---

### Fix 4: Check Image Paths in HTML

**Current paths in your HTML are:**
```html
<img src="images/mainlogo.png" ...>
```

**This is correct IF:**
- `images` folder is in `public_html/`
- `index.html` is in `public_html/`
- Both are at the same level

**Verify in File Manager:**
```
public_html/
├── index.html        ← HTML file here
└── images/           ← Images folder here (same level)
    └── mainlogo.png
```

---

### Fix 5: Try Absolute Path (If Relative Doesn't Work)

**If images still don't load, try absolute path:**

1. In File Manager, note your domain structure
2. Update HTML to use absolute path:
   ```html
   <!-- Change from: -->
   <img src="images/mainlogo.png" ...>
   
   <!-- To: -->
   <img src="/images/mainlogo.png" ...>
   ```
   (Add leading slash `/`)

**Or full URL:**
```html
<img src="http://ironwatchsecurity.ca/images/mainlogo.png" ...>
```

---

### Fix 6: Re-Upload Images

**If nothing works, re-upload:**

1. **Delete old images folder:**
   - In File Manager, right-click `images` folder
   - Select **"Delete"**
   - Confirm deletion

2. **Re-upload images folder:**
   - Click **"Upload"**
   - Select your `images` folder from computer
   - Upload to `public_html/`
   - Wait for upload to complete

3. **Verify upload:**
   - Check `images` folder exists
   - Check files are inside
   - Check file names are correct

---

## Step-by-Step Troubleshooting

### Step 1: Check File Structure
1. Open File Manager
2. Go to `public_html`
3. Verify structure matches:
   ```
   public_html/
   ├── index.html
   ├── styles.css
   ├── script.js
   └── images/
       ├── mainlogo.png
       └── logo.svg
   ```

### Step 2: Check File Names
1. Open `images` folder
2. Verify file names:
   - `mainlogo.png` (exactly this, lowercase)
   - `logo.svg` (exactly this, lowercase)

### Step 3: Check Permissions
1. Right-click `images` folder → **"Change Permissions"** → Set to **755**
2. Right-click `mainlogo.png` → **"Change Permissions"** → Set to **644**

### Step 4: Test
1. Visit your website: `http://fnz.ca8.mytemp.website`
2. Press **F12** to open browser console
3. Check for errors:
   - Look for red error messages
   - Check "Network" tab for failed image loads
   - Note the exact error message

### Step 5: Clear Cache
1. In browser, press **Ctrl + F5** (hard refresh)
2. Or clear browser cache
3. Try in incognito/private window

---

## Common Issues & Solutions

### Issue: "404 Not Found" for images
**Solution:**
- Images folder not uploaded
- Wrong folder location
- File names don't match

### Issue: "403 Forbidden" for images
**Solution:**
- Wrong file permissions
- Set folder to 755, files to 644

### Issue: Images load locally but not on server
**Solution:**
- Case sensitivity (Windows is case-insensitive, servers are not)
- Path differences
- Files not uploaded correctly

### Issue: Some images load, others don't
**Solution:**
- Check individual file permissions
- Check file names match exactly
- Check file sizes (very large files might timeout)

---

## Quick Checklist

- [ ] `images` folder is in `public_html/`
- [ ] `mainlogo.png` is inside `images/` folder
- [ ] File names are lowercase: `mainlogo.png` (not `MainLogo.png`)
- [ ] Folder permissions: 755
- [ ] File permissions: 644
- [ ] HTML uses: `src="images/mainlogo.png"`
- [ ] Cleared browser cache (Ctrl+F5)
- [ ] Checked browser console for errors (F12)

---

## Still Not Working?

### Check Browser Console
1. Press **F12** in browser
2. Go to **"Console"** tab
3. Look for error messages
4. Go to **"Network"** tab
5. Refresh page
6. Look for failed image requests (red)
7. Click on failed request to see error details

### Common Error Messages:
- **404 Not Found:** File doesn't exist or wrong path
- **403 Forbidden:** Permission issue
- **CORS Error:** Cross-origin issue (rare for same domain)

### Get Exact Error:
1. Open browser console (F12)
2. Look for error message
3. Note the exact path it's trying to load
4. Compare with actual file location

---

## Alternative: Use Different Image Format

If PNG doesn't work, try:
1. Convert `mainlogo.png` to `mainlogo.jpg`
2. Update HTML: `src="images/mainlogo.jpg"`
3. Upload new file

---

## Need More Help?

- **File Upload Help:** See `HOW-TO-UPLOAD-IMAGES-FOLDER.md`
- **GoDaddy Support:** [https://www.godaddy.com/help](https://www.godaddy.com/help)
- **cPanel File Manager:** [https://www.godaddy.com/help/file-manager-16037](https://www.godaddy.com/help/file-manager-16037)

---

**Most common fix: Re-upload the images folder with correct permissions (755 for folder, 644 for files)!** 🔧


