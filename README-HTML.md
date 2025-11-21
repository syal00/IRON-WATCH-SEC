# Iron Watch Security - HTML Website

A standalone HTML/CSS/JavaScript marketing website for Iron Watch Security.

## Files

- **index.html** - Main HTML file with all sections
- **styles.css** - All CSS styles
- **script.js** - JavaScript for animations and form handling

## Setup

1. **Download all files** to a folder on your computer
2. **Open index.html** in any web browser
   - Double-click `index.html`
   - Or right-click and select "Open with" > your browser
   - Or drag and drop into your browser window

That's it! No build process or dependencies needed.

## Contact Form Setup

The contact form has two options:

### Option 1: EmailJS (Recommended - Free)

1. Sign up for a free account at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create an email service (connect Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{company}}`
   - `{{site_address}}`
   - `{{service_type}}`
   - `{{message}}`
4. Get your Service ID, Template ID, and Public Key
5. Open `script.js` and:
   - Uncomment the `emailjs.init('YOUR_PUBLIC_KEY')` line (line ~94)
   - Replace `YOUR_PUBLIC_KEY` with your EmailJS public key
   - Uncomment and configure the email sending code in `handleFormSubmit` function (around line ~148)
   - Replace `YOUR_SERVICE_ID` with your service ID
   - Replace `YOUR_TEMPLATE_ID` with your template ID

### Option 2: Fallback Method

If EmailJS is not configured, the form will:
- Log the form data to the browser console
- Show a success message to the user
- Optionally open the user's email client with a mailto link

For production use, **Option 1 (EmailJS) is recommended**.

## Customization

### Update Phone Number

1. Open `index.html`
2. Find and replace all instances of `(+1) 000-000-0000` or `tel:+10000000000`
3. Update with your actual phone number

### Update Email Address

1. Open `index.html`
2. Find and replace `ironwatchsec.services@gmail.com` with your email
3. Also update in `script.js` if using the fallback method (line ~205)

### Update Testimonials

1. Open `index.html`
2. Find the testimonials section (around line ~330)
3. Edit the testimonial cards with real client feedback

### Update Service Descriptions

1. Open `index.html`
2. Find the services section (around line ~190)
3. Edit the service cards with your descriptions

### Update Company Info

1. Open `index.html`
2. Find the About section (around line ~140)
3. Edit the text with your company story

## Browser Support

Works in all modern browsers:
- Chrome
- Firefox
- Safari
- Edge
- Opera

## Deployment

You can deploy this to any static hosting service:

### GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the folder containing your files
3. Your site will be live instantly

### Vercel
1. Go to [vercel.com](https://vercel.com)
2. Upload your project folder
3. Deploy in seconds

### Traditional Web Hosting
1. Upload all files via FTP to your web server
2. Make sure `index.html` is in the root directory
3. Access via your domain name

## Features

✅ Single HTML file - no build process needed  
✅ Fully responsive design (mobile, tablet, desktop)  
✅ Smooth scroll animations  
✅ Contact form with email integration  
✅ Dark premium theme with gold accents  
✅ All sections: Hero, About, Services, Industries, Process, Testimonials, Contact  

## Notes

- The website uses Google Fonts (Inter) - requires internet connection
- EmailJS CDN is loaded from a CDN - requires internet connection
- All animations and effects work offline once the page is loaded

## Support

For questions or issues, contact: ironwatchsec.services@gmail.com


