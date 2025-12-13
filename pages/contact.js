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
    const formData = {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value
    };

    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // Here you would typically send the form data to a backend service
    // For now, we'll just show a success message

    // Simulate API call
    setTimeout(() => {
        formMessage.className = 'p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-500';
        formMessage.textContent = 'Message sent successfully! I\'ll get back to you soon.';
        formMessage.classList.remove('hidden');

        // Reset form
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    }, 1000);

    // If you want to use a service like Formspree or EmailJS, uncomment and configure:
    /*
    if (typeof config !== 'undefined' && config.contact.formspreeId) {
        fetch(`https://formspree.io/f/${config.contact.formspreeId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                formMessage.className = 'p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-500';
                formMessage.textContent = 'Message sent successfully!';
                form.reset();
            } else {
                throw new Error('Failed to send message');
            }
        })
        .catch(error => {
            formMessage.className = 'p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500';
            formMessage.textContent = 'Failed to send message. Please try again.';
        })
        .finally(() => {
            formMessage.classList.remove('hidden');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        });
    }
    */
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
