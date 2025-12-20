// Projects page JavaScript

// Load all projects
function loadAllProjects(filter = 'all', searchTerm = '') {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    // Get projects from config
    let filteredProjects = (typeof config !== 'undefined' && config.projects) ? config.projects : [];

    // Filter by category
    if (filter !== 'all') {
        filteredProjects = filteredProjects.filter(p => p.category.includes(filter) || p.category === filter);
    }

    // Filter by search term
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filteredProjects = filteredProjects.filter(p =>
            p.title.toLowerCase().includes(term) ||
            p.description.toLowerCase().includes(term) ||
            p.tags.some(tag => tag.toLowerCase().includes(term))
        );
    }

    if (filteredProjects.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-12">
                <p class="text-gray-400 text-lg font-mono">[NO_RESULTS_FOUND]</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filteredProjects.map(project => {
        const projectUrl = project.externalLink ? project.links.github : `project-detail.html?id=${project.id}`;
        const targetAttr = project.externalLink ? 'target="_blank" rel="noopener noreferrer"' : '';

        return `
            <div class="glass flex flex-col h-full group overflow-hidden relative">
                <!-- Clickable Area -->
                <a href="${projectUrl}" ${targetAttr} class="absolute inset-0 z-0" aria-label="View ${project.title}"></a>
                
                <div class="relative h-48 overflow-hidden bg-gray-900/50">
                    <div class="absolute inset-0 flex items-center justify-center text-gray-700 font-mono text-xs">
                        [NO_IMAGE_DATA]
                    </div>
                    <img src="${project.image}" alt="${project.title}" 
                         onerror="this.style.display='none'"
                         class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-10">
                </div>
                
                <div class="p-6 flex-1 flex flex-col relative z-10 pointer-events-none">
                    <div class="text-sm text-primary-500 mb-2 font-mono pointer-events-auto">${project.category}</div>
                    <h3 class="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors pointer-events-auto">
                        <a href="${projectUrl}" ${targetAttr}>${project.title}</a>
                    </h3>
                    <p class="text-gray-400 mb-4 flex-1 text-sm leading-relaxed">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4 pointer-events-auto">
                        ${project.tags.slice(0, 5).map(tag => `
                            <span class="text-xs px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded text-gray-300 font-mono">#${tag}</span>
                        `).join('')}
                    </div>
                    <div class="flex gap-3 mt-auto pt-4 border-t border-gray-800 pointer-events-auto">
                        <a href="${projectUrl}" ${targetAttr}
                           class="text-sm font-mono text-white hover:text-primary-500 flex items-center gap-2">
                           <i data-feather="${project.externalLink ? 'external-link' : 'book-open'}" class="w-4 h-4"></i> ${project.externalLink ? 'GitHub' : 'Details'}
                        </a>
                        ${project.links.github && project.links.github !== '#' && !project.externalLink ? `
                            <a href="${project.links.github}" target="_blank" rel="noopener noreferrer"
                               class="text-sm text-gray-400 hover:text-secondary-500 flex items-center gap-1 font-mono">
                                <i data-feather="github" class="w-4 h-4"></i> Code
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Re-initialize feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadAllProjects();

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter projects
            const category = btn.dataset.category;
            const searchTerm = document.getElementById('project-search')?.value || '';
            loadAllProjects(category, searchTerm);
        });
    });

    // Search functionality
    const searchInput = document.getElementById('project-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const activeFilter = document.querySelector('.filter-btn.active')?.dataset.category || 'all';
            loadAllProjects(activeFilter, e.target.value);
        });
    }

    // Initialize feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});
