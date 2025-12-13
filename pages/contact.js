// Contact page JavaScript

// Load contact information from config
function loadContactInfo() {
    if (typeof config === 'undefined') return;

    // Update contact info
    const emailEl = document.getElementById('contact-email');
    const locationEl = document.getElementById('contact-location');
    const githubEl = document.getElementById('contact-github');
    const linkedinEl = document.getElementById('contact-linkedin');
    const twitterEl = document.getElementById('contact-twitter');
    const youtubeEl = document.getElementById('contact-youtube');

    if (emailEl && config.personal.email) {
        emailEl.textContent = config.personal.email;
        emailEl.href = `mailto:${config.personal.email}`;
    }
    if (locationEl && config.personal.location) {
        locationEl.textContent = config.personal.location;
    }
    if (githubEl && config.social.github) githubEl.href = config.social.github;
    if (linkedinEl && config.social.linkedin) linkedinEl.href = config.social.linkedin;
    if (twitterEl && config.social.twitter) twitterEl.href = config.social.twitter;
    if (youtubeEl && config.social.youtube) youtubeEl.href = config.social.youtube;
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formMessage = document.getElementById('form-message');
    const submitBtn = form.querySelector('button[type="submit"]');

    // Get form data
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    // Validate fields
    if (!name || !email || !subject || !message) {
        formMessage.className = 'p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500';
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.classList.remove('hidden');
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 3000);
        return;
    }

    // Get recipient email from config
    const recipientEmail = (typeof config !== 'undefined' && config.personal.email)
        ? config.personal.email
        : 'ahmedamin@suumail.net';

    // Construct email body
    const emailBody = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    // Create mailto link
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Show info message
    formMessage.className = 'p-4 bg-primary-500/10 border border-primary-500 rounded-lg text-primary-500';
    formMessage.textContent = 'Opening your email client...';
    formMessage.classList.remove('hidden');

    // Open email client
    window.location.href = mailtoLink;

    // Reset form after short delay
    setTimeout(() => {
        form.reset();
        formMessage.className = 'p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-500';
        formMessage.textContent = 'Please send the email from your email client to complete your message.';

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    }, 500);
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadContactInfo();

    // Setup form submission
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }

    // Initialize feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});
