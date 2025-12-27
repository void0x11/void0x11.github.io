// Blog page JavaScript - Modern Technical Blog

// Newsletter form handler - Integrates with Buttondown (free for up to 100 subscribers)
// To set up: 1) Create account at buttondown.email 2) Replace YOUR_USERNAME below
function handleNewsletterSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector('.newsletter-input');
    const btn = form.querySelector('.newsletter-btn');
    const statusEl = form.querySelector('.newsletter-status');
    const email = input.value.trim();

    if (!email) return;

    // Show loading state
    btn.disabled = true;
    btn.textContent = 'Subscribing...';

    // Buttondown API (replace YOUR_USERNAME with your Buttondown username)
    // For GitHub Pages, you can also use: Mailchimp, ConvertKit, or a simple Google Form
    const BUTTONDOWN_USERNAME = 'ahmedamin'; // Change this to your username

    fetch(`https://api.buttondown.email/v1/subscribers`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            referrer_url: window.location.href
        })
    })
        .then(response => {
            if (response.ok || response.status === 201) {
                // Success
                input.value = '';
                btn.textContent = '✓ Subscribed!';
                btn.style.background = '#22c55e';
                if (statusEl) statusEl.textContent = 'Check your email to confirm.';
            } else {
                throw new Error('Subscription failed');
            }
        })
        .catch(error => {
            // Fallback: Open Buttondown subscription page directly
            window.open(`https://buttondown.email/${BUTTONDOWN_USERNAME}`, '_blank');
            btn.textContent = 'Subscribe';
            btn.disabled = false;
        })
        .finally(() => {
            setTimeout(() => {
                btn.textContent = 'Subscribe';
                btn.style.background = '';
                btn.disabled = false;
                if (statusEl) statusEl.textContent = '';
            }, 4000);
        });
}

// Load featured posts (top 3 articles in a grid)
function loadFeaturedPosts() {
    const container = document.getElementById('featured-post-container');
    if (!container) return;

    const posts = (typeof config !== 'undefined' && config.blogPosts) ? config.blogPosts : [];
    if (posts.length === 0) {
        container.style.display = 'none';
        return;
    }

    // Get top 3 posts (or fewer if not enough)
    const featuredPosts = posts.slice(0, 3);

    container.innerHTML = `
        <div class="featured-grid">
            ${featuredPosts.map((post, index) => `
                <article class="featured-card ${index === 0 ? 'featured-card-main' : ''}">
                    ${post.coverImage ? `
                        <a href="blog-posts/${post.slug}.html" class="featured-card-image">
                            <img src="${post.coverImage}" alt="${post.title}">
                        </a>
                    ` : ''}
                    <div class="featured-card-content">
                        <div class="featured-card-meta">
                            <span class="featured-card-category">${post.category}</span>
                            <span class="featured-card-date">${post.date}</span>
                        </div>
                        <h3 class="featured-card-title">
                            <a href="blog-posts/${post.slug}.html">${post.title}</a>
                        </h3>
                        ${index === 0 ? `<p class="featured-card-excerpt">${post.excerpt}</p>` : ''}
                    </div>
                </article>
            `).join('')}
        </div>
    `;

    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

// Load all blog posts as a grid (unified display)
function loadBlogPosts(filter = 'all') {
    const container = document.getElementById('blog-grid');
    const countEl = document.getElementById('article-count');
    const emptyState = document.getElementById('empty-state');

    if (!container) return;

    // Get posts from config
    let posts = (typeof config !== 'undefined' && config.blogPosts) ? config.blogPosts : [];

    // Filter by category
    if (filter !== 'all') {
        posts = posts.filter(p => p.category.includes(filter) || p.category === filter);
    }

    // Update article count
    if (countEl) {
        const total = (typeof config !== 'undefined' && config.blogPosts) ? config.blogPosts.length : 0;
        if (filter === 'all') {
            countEl.textContent = `${total} article${total !== 1 ? 's' : ''} published`;
        } else {
            countEl.textContent = `${posts.length} of ${total} articles`;
        }
    }

    // Handle empty state
    if (posts.length === 0) {
        container.innerHTML = '';
        if (emptyState) emptyState.classList.remove('hidden');
        return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    // Render all posts as grid cards
    container.innerHTML = posts.map((post, index) => `
        <article class="blog-grid-card">
            ${post.coverImage ? `
                <a href="blog-posts/${post.slug}.html" class="blog-grid-card-image">
                    <img src="${post.coverImage}" alt="${post.title}" loading="lazy">
                </a>
            ` : `
                <a href="blog-posts/${post.slug}.html" class="blog-grid-card-image blog-grid-card-placeholder">
                    <i data-feather="file-text"></i>
                </a>
            `}
            <div class="blog-grid-card-content">
                <div class="blog-grid-card-meta">
                    <span class="blog-grid-card-category">${post.category}</span>
                    <span class="blog-grid-card-date">${post.date}</span>
                </div>
                <h3 class="blog-grid-card-title">
                    <a href="blog-posts/${post.slug}.html">${post.title}</a>
                </h3>
                <p class="blog-grid-card-excerpt">${post.excerpt}</p>
                <div class="blog-grid-card-footer">
                    <span class="blog-grid-card-readtime">
                        <i data-feather="clock"></i>
                        ${post.readTime}
                    </span>
                </div>
            </div>
        </article>
    `).join('');

    // Re-initialize feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadBlogPosts();

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter posts
            const category = btn.dataset.category;
            loadBlogPosts(category);
        });
    });

    // Initialize feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});
