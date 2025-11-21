# Logo Setup Instructions

## Current Logo Status

The website is configured to use `images/logo.svg` as the company logo.

## If Logo is Not Showing:

### 1. Check Browser Cache
- **Hard Refresh:** Press `Ctrl + Shift + R` (Windows/Linux) or `Cmd + Shift + R` (Mac)
- **Clear Cache:** Open browser settings and clear cached images and files

### 2. Verify Logo File Exists
- Check that `images/logo.svg` exists in your project folder
- Or place your logo image file in the `images/` folder

### 3. Using Your Own Logo Image

If you have your logo as PNG or JPG:

1. **Place your logo file** in the `images/` folder
2. **Name it exactly:** `logo.png` or `logo.jpg`
3. **Update `index.html`** (2 places):
   - **Header logo** (around line 22): Change `src="images/logo.svg"` to `src="images/logo.png"`
   - **Hero logo** (around line 77): Change `src="images/logo.svg"` to `src="images/logo.png"`

Or simply replace `images/logo.svg` with your logo file.

### 4. File Path Issues

If logo still doesn't show:
- Make sure the file path is correct: `images/logo.svg` (or `.png`/`.jpg`)
- Check file permissions
- Try accessing the image directly in browser: `http://127.0.0.1:3000/images/logo.svg`

### 5. Logo Formats Supported

- ✅ SVG (recommended - scales perfectly)
- ✅ PNG (with transparency recommended)
- ✅ JPG (works but may have white background)

### Quick Fix

1. Open `index.html`
2. Find: `<img src="images/logo.svg"`
3. Replace with your logo filename: `<img src="images/your-logo-file.png"`
4. Save and refresh browser (Ctrl+Shift+R)


