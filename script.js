// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  initializeHeader();
  initializeScrollAnimations();
  initializeMobileMenu();
  setCurrentYear();
  initializeEmailJS();
});

// ========================================
// HEADER SCROLL EFFECT
// ========================================
function initializeHeader() {
  const header = document.getElementById('header');
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
}

// ========================================
// SMOOTH SCROLLING
// ========================================
function scrollToSection(event, targetId) {
  event.preventDefault();
  const element = document.querySelector(targetId);
  
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

// Make scrollToSection available globally
window.scrollToSection = scrollToSection;

// ========================================
// SCROLL ANIMATIONS
// ========================================
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '-100px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all sections with fade-in-section class
  const sections = document.querySelectorAll('.fade-in-section');
  sections.forEach(section => {
    observer.observe(section);
  });
}

// ========================================
// MOBILE MENU
// ========================================
function initializeMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    const menuButton = document.querySelector('.mobile-menu-btn');
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isClickOnButton = menuButton && menuButton.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnButton && mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
    }
  });
}

function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('active');
}

// Make toggleMobileMenu available globally
window.toggleMobileMenu = toggleMobileMenu;

// ========================================
// SET CURRENT YEAR
// ========================================
function setCurrentYear() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// ========================================
// EMAILJS INITIALIZATION
// ========================================
function initializeEmailJS() {
  // EmailJS is loaded from CDN in the HTML head
  // Initialize EmailJS with your public key
  // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
  // Get it from https://www.emailjs.com/
  
  if (typeof emailjs !== 'undefined') {
    // Uncomment and set your EmailJS public key:
    // emailjs.init('YOUR_PUBLIC_KEY');
    
    // For now, we'll use a fallback method if EmailJS is not configured
    console.log('EmailJS loaded. Configure your public key in script.js to enable email sending.');
  }
}

// ========================================
// CONTACT FORM SUBMISSION
// ========================================
async function handleFormSubmit(event) {
  event.preventDefault();
  
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formMessage = document.getElementById('formMessage');
  
  // Get form data
  const formData = {
    name: document.getElementById('name').value.trim(),
    company: document.getElementById('company').value.trim(),
    email: document.getElementById('email').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    siteAddress: document.getElementById('siteAddress').value.trim(),
    serviceType: document.getElementById('serviceType').value,
    message: document.getElementById('message').value.trim()
  };
  
  // Validate required fields
  if (!formData.name || !formData.email || !formData.phone || !formData.siteAddress || !formData.serviceType) {
    showFormMessage('Please fill in all required fields.', 'error');
    return;
  }
  
  // Disable submit button
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  formMessage.style.display = 'none';
  
  try {
    // Check if EmailJS is configured
    if (typeof emailjs !== 'undefined' && emailjs.init) {
      // EmailJS Method (Recommended)
      // You need to:
      // 1. Sign up at https://www.emailjs.com/
      // 2. Create an email service (Gmail, Outlook, etc.)
      // 3. Create an email template
      // 4. Get your Service ID, Template ID, and Public Key
      // 5. Uncomment and configure the code below:
      
      /*
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company || 'N/A',
        site_address: formData.siteAddress,
        service_type: formData.serviceType,
        message: formData.message || 'No additional message',
        to_email: 'ironwatchsec.services@gmail.com'
      };
      
      await emailjs.send(
        'YOUR_SERVICE_ID',  // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams
      );
      */
      
      // For now, use fallback method
      await sendEmailFallback(formData);
    } else {
      // Fallback: Use mailto link as alternative
      await sendEmailFallback(formData);
    }
    
    // Success
    showFormMessage('Thank you! Your message has been sent. We\'ll get back to you soon.', 'success');
    form.reset();
    
  } catch (error) {
    console.error('Error sending email:', error);
    showFormMessage('Failed to send message. Please try again or contact us directly at ironwatchsec.services@gmail.com', 'error');
  } finally {
    // Re-enable submit button
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Request';
  }
}

// Make handleFormSubmit available globally
window.handleFormSubmit = handleFormSubmit;

// ========================================
// FALLBACK EMAIL METHOD
// ========================================
function sendEmailFallback(formData) {
  // This method creates a mailto link with the form data
  // Note: This will open the user's email client
  // For production, use EmailJS or a backend service
  
  const subject = encodeURIComponent(`Quote Request: ${formData.serviceType} - ${formData.name}`);
  const body = encodeURIComponent(`
Name: ${formData.name}
${formData.company ? `Company: ${formData.company}\n` : ''}Email: ${formData.email}
Phone: ${formData.phone}
Site Address: ${formData.siteAddress}
Service Type: ${formData.serviceType}
${formData.message ? `\nMessage:\n${formData.message}` : ''}
  `);
  
  const mailtoLink = `mailto:ironwatchsec.services@gmail.com?subject=${subject}&body=${body}`;
  
  // For now, we'll log the data and show success
  // In a real implementation, you would use EmailJS or a backend API
  console.log('Form submission:', formData);
  console.log('Mailto link:', mailtoLink);
  
  // Optionally, you can uncomment the line below to open email client:
  // window.location.href = mailtoLink;
  
  // Return a promise that resolves after a short delay (simulating API call)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
}

// ========================================
// FORM MESSAGE DISPLAY
// ========================================
function showFormMessage(message, type) {
  const formMessage = document.getElementById('formMessage');
  
  if (formMessage) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
      setTimeout(() => {
        formMessage.style.display = 'none';
      }, 5000);
    }
  }
}

// ========================================
// ADDITIONAL UTILITIES
// ========================================

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', function() {
  // Service cards
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.03) translateY(-5px)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) translateY(0)';
    });
  });
  
  // Industry cards
  const industryCards = document.querySelectorAll('.industry-card');
  industryCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05) translateY(-5px)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) translateY(0)';
    });
  });
  
  // Strength cards
  const strengthCards = document.querySelectorAll('.strength-card');
  strengthCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05) translateY(-5px)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) translateY(0)';
    });
  });
  
  // Testimonial cards
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  testimonialCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.02) translateY(-5px)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) translateY(0)';
    });
  });
});


