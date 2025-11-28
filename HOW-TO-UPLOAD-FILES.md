# How to Upload Files to public_html in GoDaddy

## Method 1: Using File Manager (Easiest - No Software Needed)

### Step 1: Access cPanel
1. In your GoDaddy Hosting Dashboard, click the **"cPanel Admin"** button (top right)
2. This will open cPanel in a new tab/window

### Step 2: Open File Manager
1. In cPanel, look for the **"Files"** section
2. Click on **"File Manager"** icon
3. A new window will open showing your files

### Step 3: Navigate to public_html
1. In the left sidebar, you'll see folders
2. Click on **"public_html"** folder to open it
   - This is your website root folder
   - Files here will be accessible on your website
3. If you see a subfolder like `public_html/fnz.ca8.mytemp.website`, you can use that OR the main `public_html` folder

### Step 4: Upload Files

**Option A: Upload Individual Files**
1. Make sure you're inside the `public_html` folder
2. Click the **"Upload"** button at the top toolbar
3. A new window/tab will open for file upload
4. Click **"Select File"** or drag and drop files:
   - Select `index.html` from your computer
   - Select `styles.css` from your computer
   - Select `script.js` from your computer
   - Select `.htaccess` from your computer (if you have it)
5. Click **"Upload"** button
6. Wait for files to upload (you'll see progress)
7. Close the upload window
8. Refresh File Manager to see your uploaded files

**Option B: Upload Folder (for images)**
1. Click **"Upload"** button
2. Look for **"Select Folder"** or drag the entire `images` folder
3. Upload the entire `images` folder at once
4. OR create the folder first, then upload images into it:
   - Click **"+ Folder"** button
   - Name it `images`
   - Open the `images` folder
   - Click **"Upload"** and select all image files

### Step 5: Verify Files Are Uploaded
Your `public_html` folder should now contain:
```
public_html/
├── index.html
├── styles.css
├── script.js
├── .htaccess (optional)
└── images/
    ├── mainlogo.png
    ├── logo.svg
    └── (other images)
```

### Step 6: Set Correct Permissions (If Needed)
1. Right-click on `index.html`
2. Select **"Change Permissions"** or **"CHMOD"**
3. Set to **644** (read/write for owner, read for others)
4. Do the same for `styles.css` and `script.js`
5. For `images` folder, set permissions to **755**

---

## Method 2: Using FTP (Alternative Method)

If File Manager doesn't work or you prefer FTP:

### Step 1: Get FTP Credentials
1. In cPanel, look for **"FTP Accounts"** section
2. Note your FTP details:
   - **FTP Server/Host:** Usually `ftp.yourdomain.com` or an IP
   - **FTP Username:** Your cPanel username (shown in dashboard: `clqgvzcpygwa`)
   - **FTP Password:** Your cPanel password

### Step 2: Download FTP Client
- **FileZilla** (Free): [https://filezilla-project.org/](https://filezilla-project.org/)
- **WinSCP** (Windows): [https://winscp.net/](https://winscp.net/)

### Step 3: Connect via FTP
1. Open FileZilla
2. Enter your FTP details:
   - **Host:** Your FTP server address
   - **Username:** Your FTP username
   - **Password:** Your FTP password
   - **Port:** 21
3. Click **"Quickconnect"**

### Step 4: Upload Files
1. On the right side (remote), navigate to `public_html`
2. On the left side (local), navigate to your project folder
3. Drag and drop files from left to right:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `.htaccess`
   - `images/` folder

---

## Troubleshooting

### Can't Find File Manager?
- Look for **"Files"** section in cPanel
- It might be under **"Files"** → **"File Manager"**
- Or search for "File Manager" in cPanel search box

### Can't Find public_html?
- It's usually in the root of your File Manager
- Look in the left sidebar for folder list
- It might be named `public_html` or `public_html/yourdomain.com`

### Upload Button Not Working?
- Make sure pop-up blocker is disabled
- Try a different browser
- Check if JavaScript is enabled

### Files Upload But Website Doesn't Show?
- Make sure `index.html` is in `public_html` root (not in a subfolder)
- Check file name is exactly `index.html` (not `Index.html` or `index.HTML`)
- Clear browser cache (Ctrl+F5)
- Wait 5-10 minutes for changes to propagate

### Images Not Loading?
- Make sure `images` folder is inside `public_html`
- Check file paths in HTML: `images/mainlogo.png` (not `Images/mainlogo.png`)
- Verify all image files are uploaded
- Check file permissions (should be 644 for files, 755 for folders)

### Permission Denied Error?
- Right-click file → **"Change Permissions"**
- Set files to **644**
- Set folders to **755**

---

## Quick Checklist

Before uploading:
- [ ] Have all files ready on your computer
- [ ] Files to upload: `index.html`, `styles.css`, `script.js`, `.htaccess`
- [ ] `images` folder with all images inside

After uploading:
- [ ] All files are in `public_html` folder
- [ ] `index.html` is in root of `public_html` (not in subfolder)
- [ ] `images` folder is inside `public_html`
- [ ] File names are correct (case-sensitive)
- [ ] Test website loads at your domain

---

## Visual Guide

**File Manager Layout:**
```
┌─────────────────────────────────────┐
│  [Upload] [New File] [New Folder]   │  ← Toolbar
├─────────────────────────────────────┤
│  Folders (Left)  │  Files (Right)   │
│                  │                   │
│  public_html  ←──│── index.html      │
│    └─ images     │   styles.css      │
│                  │   script.js        │
│                  │   .htaccess       │
└─────────────────────────────────────┘
```

**Correct File Structure:**
```
public_html/              ← You are here
├── index.html           ← Main page
├── styles.css           ← Styles
├── script.js            ← JavaScript
├── .htaccess            ← Config (optional)
└── images/              ← Images folder
    ├── mainlogo.png
    ├── logo.svg
    └── (other images)
```

---

## Need More Help?

- **GoDaddy File Manager Help:** [https://www.godaddy.com/help/use-the-file-manager-16036](https://www.godaddy.com/help/use-the-file-manager-16036)
- **cPanel File Manager Guide:** [https://www.godaddy.com/help/file-manager-16037](https://www.godaddy.com/help/file-manager-16037)

**Your files are ready to upload! Follow Method 1 above for the easiest way.** 🚀



