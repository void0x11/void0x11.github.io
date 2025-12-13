// Blog page JavaScript

// Load all blog posts
function loadAllBlogPosts(filter = 'all') {
    const list = document.getElementById('blog-list');
    if (!list) return;

    // Get posts from config
    let filteredPosts = (typeof config !== 'undefined' && config.blogPosts) ? config.blogPosts : [];

    // Filter by category
    if (filter !== 'all') {
        filteredPosts = filteredPosts.filter(p => p.category.includes(filter) || p.category === filter);
    }

    if (filteredPosts.length === 0) {
        list.innerHTML = `
            <div class="text-center py-12 font-mono">
                <p class="text-gray-400 text-lg">> [NO_ARTICLES_FOUND]</p>
            </div>
        `;
        return;
    }

    list.innerHTML = filteredPosts.map(post => `
        <article class="glass p-8 rounded-xl hover:bg-gray-800/40 transition-all duration-300 border-l-4 border-primary-500/50 hover:border-primary-500">
            <!-- Post Header -->
            <div class="mb-6">
                <div class="flex flex-wrap items-center gap-3 text-sm text-slate-500 mb-4">
                    <span class="text-primary-500 font-mono font-bold">${post.category}</span>
                    <span>•</span>
                    <span>${post.date}</span>
                    <span>•</span>
                    <span>${post.readTime}</span>
                </div>
                <h2 class="text-2xl md:text-3xl font-bold mb-4 text-white hover:text-primary-500 transition-colors">
                    <a href="blog-post.html?post=${post.slug}">${post.title}</a>
                </h2>
            </div>

            <!-- Post Excerpt -->
            <p class="text-slate-300 leading-relaxed mb-6 text-base">
                ${post.excerpt}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-6">
                ${post.tags.map(tag => `
                    <span class="text-xs px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 font-mono">#${tag}</span>
                `).join('')}
            </div>

            <!-- Post Footer -->
            <div class="pt-6 border-t border-gray-800">
                <a href="blog-post.html?post=${post.slug}" class="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 font-mono text-sm transition-colors group">
                    <span>Read Article</span>
                    <i data-feather="arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
                </a>
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
    loadAllBlogPosts();

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter posts
            const category = btn.dataset.category;
            loadAllBlogPosts(category);
        });
    });

    // Initialize feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});
