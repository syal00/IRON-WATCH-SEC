# How to Upload Images Folder to GoDaddy

## Step-by-Step Guide

### Method 1: Upload Entire Folder (Easiest)

#### Step 1: Access File Manager
1. Log in to GoDaddy
2. Go to **My Products** → **Web Hosting** → **Manage**
3. Click **"cPanel Admin"**
4. Click **"File Manager"** in cPanel

#### Step 2: Navigate to public_html
1. In File Manager, click on **"public_html"** folder in the left sidebar
2. Make sure you're inside `public_html` folder

#### Step 3: Upload Images Folder
1. Click the **"Upload"** button at the top toolbar
2. A new upload window/tab will open
3. **Option A: Drag and Drop**
   - Find your `images` folder on your computer
   - Drag the entire `images` folder into the upload area
   - Drop it
   
   **Option B: Select Folder**
   - Click **"Select File"** or **"Select Folder"**
   - Navigate to your project folder: `E:\WEB DEVELOPMENT AND INTERNET APPLICATIONS LEVEL 3\IRON WATCH SECURITY Inc`
   - Select the **`images`** folder
   - Click **"Open"** or **"Upload"**

4. Wait for upload to complete
5. You'll see progress bar showing upload status
6. Close the upload window when done

#### Step 4: Verify Upload
1. In File Manager, you should now see:
   ```
   public_html/
   ├── index.html
   ├── styles.css
   ├── script.js
   └── images/          ← This folder should be here
       ├── mainlogo.png
       ├── logo.svg
       └── (other images)
   ```

2. Click on `images` folder to open it
3. Verify all images are inside:
   - `mainlogo.png`
   - `logo.svg`
   - Any other images you have

---

### Method 2: Create Folder First, Then Upload Images

If Method 1 doesn't work, try this:

#### Step 1: Create Images Folder
1. In File Manager, make sure you're in `public_html`
2. Click **"+ Folder"** or **"New Folder"** button
3. Name it: `images`
4. Press Enter or click **"Create"**

#### Step 2: Open Images Folder
1. Double-click the `images` folder you just created
2. You should now be inside `images` folder

#### Step 3: Upload Individual Images
1. Click **"Upload"** button
2. Navigate to: `E:\WEB DEVELOPMENT AND INTERNET APPLICATIONS LEVEL 3\IRON WATCH SECURITY Inc\images`
3. Select all images:
   - `mainlogo.png`
   - `logo.svg`
   - Any other images
4. Click **"Open"** or **"Upload"**
5. Wait for upload to complete

#### Step 4: Verify
1. You should see all images inside `images` folder
2. Go back to `public_html` to verify structure

---

### Method 3: Using FTP (If File Manager Doesn't Work)

#### Step 1: Get FTP Credentials
1. In cPanel, find **"FTP Accounts"** section
2. Note your FTP details:
   - FTP Server/Host
   - FTP Username
   - FTP Password

#### Step 2: Connect with FileZilla
1. Download FileZilla: [https://filezilla-project.org/](https://filezilla-project.org/)
2. Open FileZilla
3. Enter FTP credentials
4. Click **"Quickconnect"**

#### Step 3: Upload Images Folder
1. On right side (remote), navigate to `public_html`
2. On left side (local), navigate to: `E:\WEB DEVELOPMENT AND INTERNET APPLICATIONS LEVEL 3\IRON WATCH SECURITY Inc`
3. Find `images` folder on left side
4. Drag `images` folder from left to right
5. Drop it in `public_html` folder
6. Wait for upload to complete

---

## Important Notes

### File Structure Must Be Correct
```
public_html/
├── index.html
├── styles.css
├── script.js
└── images/          ← Must be here, inside public_html
    ├── mainlogo.png
    ├── logo.svg
    └── (other images)
```

### Common Mistakes to Avoid
- ❌ Don't upload images directly to `public_html` (they must be in `images/` folder)
- ❌ Don't create `Images` (capital I) - use `images` (lowercase)
- ❌ Don't put `images` folder outside `public_html`

### File Names Are Case-Sensitive
- ✅ `images/mainlogo.png` (correct)
- ❌ `Images/mainlogo.png` (wrong - capital I)
- ❌ `images/MainLogo.png` (wrong - capital letters)

---

## Troubleshooting

### Images Folder Not Uploading
- **Problem:** Upload button not working or folder not uploading
- **Solution:** 
  - Try Method 2 (create folder first, then upload images)
  - Or use FTP (Method 3)
  - Check file size limits

### Images Not Showing on Website
- **Problem:** Images uploaded but not displaying
- **Solution:**
  - Check `images` folder is inside `public_html`
  - Verify file names match exactly (case-sensitive)
  - Check file paths in HTML: `images/mainlogo.png`
  - Clear browser cache (Ctrl+F5)

### Permission Errors
- **Problem:** Can't upload or access images
- **Solution:**
  - Right-click `images` folder → **"Change Permissions"**
  - Set to **755** (read/write/execute for owner, read/execute for others)
  - For image files, set to **644**

### Wrong Folder Location
- **Problem:** Images in wrong place
- **Solution:**
  - Images must be in: `public_html/images/`
  - Not in: `public_html/` (root)
  - Not in: `public_html/other-folder/images/`

---

## Quick Checklist

Before uploading:
- [ ] Have `images` folder ready on your computer
- [ ] Know location: `E:\WEB DEVELOPMENT AND INTERNET APPLICATIONS LEVEL 3\IRON WATCH SECURITY Inc\images`

After uploading:
- [ ] `images` folder is in `public_html/`
- [ ] All images are inside `images` folder
- [ ] File names are correct (lowercase `images`)
- [ ] Test website - images should load

---

## Visual Guide

**Correct Structure:**
```
public_html/              ← You are here
├── index.html
├── styles.css
├── script.js
└── images/               ← Upload this folder here
    ├── mainlogo.png
    ├── logo.svg
    └── (other images)
```

**What to Upload:**
- Upload the entire `images` folder
- Don't upload individual images to root
- Keep folder structure intact

---

## Need More Help?

- **File Manager Issues:** See `HOW-TO-UPLOAD-FILES.md`
- **General Upload Help:** See `GODADDY-HOSTING-DEPLOYMENT.md`
- **GoDaddy Support:** [https://www.godaddy.com/help](https://www.godaddy.com/help)

---

**Follow Method 1 above - it's the easiest way to upload your images folder!** 🚀


