// Main JavaScript file for Circuit Sage portfolio
// Refined for cleaner aesthetics and real data integration

// Load projects from config or handle missing data
function getProjects() {
    if (typeof config !== 'undefined' && config.projects) {
        return config.projects;
    }
    return []; // Return empty if no config
}

// Load Skills
function loadSkills() {
    if (typeof config === 'undefined') return;

    const skillCategories = {
        'electronics-skills': config.skills.electronics,
        'embedded-skills': config.skills.embedded,
        'rf-skills': config.skills.rf,
        'software-skills': [...config.skills.software, ...config.skills.tools]
    };

    Object.entries(skillCategories).forEach(([elementId, skills]) => {
        const container = document.getElementById(elementId);
        if (container && skills) {
            container.innerHTML = skills.map(skill => `
                <span class="text-xs px-3 py-1.5 bg-gray-800/50 border border-gray-700/50 rounded text-gray-300 hover:border-gray-500 transition-colors font-mono">
                    ${skill}
                </span>
            `).join('');
        }
    });
}

// Load Projects
function loadProjects() {
    const projectsSection = document.querySelector('#projects .grid');
    if (!projectsSection) return;

    const allProjects = getProjects();
    const featuredProjects = allProjects.filter(p => p.featured);

    if (featuredProjects.length === 0) {
        projectsSection.innerHTML = '<p class="text-gray-500 col-span-full text-center py-8">Projects loading or coming soon...</p>';
        return;
    }

    projectsSection.innerHTML = featuredProjects.map(project => `
        <div class="glass flex flex-col h-full group overflow-hidden relative">
            <!-- Clickable Area for Detail Page -->
            <a href="project-detail.html?id=${project.id}" class="absolute inset-0 z-0" aria-label="View Project Details"></a>

            <div class="relative h-48 overflow-hidden bg-gray-900/50">
               <div class="absolute inset-0 flex items-center justify-center text-gray-700 font-mono text-xs">
                    [NO_IMAGE_DATA]
               </div>
               <img src="${project.image}" alt="${project.title}" 
                    onerror="this.style.display='none'"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-10">
            </div>
            
            <div class="p-6 flex-1 flex flex-col relative z-10 pointer-events-none">
                <div class="flex justify-between items-start mb-3 pointer-events-auto">
                    <span class="text-xs font-mono text-primary-500 bg-primary-500/10 px-2 py-1 rounded">
                        ${project.category}
                    </span>
                </div>
                
                <h3 class="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors pointer-events-auto">
                    <a href="project-detail.html?id=${project.id}">${project.title}</a>
                </h3>
                
                <p class="text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                    ${project.description}
                </p>
                
                <div class="flex flex-wrap gap-2 mb-6 pointer-events-auto">
                    ${project.tags.slice(0, 4).map(tag => `
                        <span class="text-xs text-gray-500 font-mono">#${tag}</span>
                    `).join('')}
                </div>
                
                <div class="flex gap-4 pt-4 border-t border-gray-800 mt-auto pointer-events-auto">
                    <a href="project-detail.html?id=${project.id}" 
                       class="text-sm font-mono text-white hover:text-primary-500 flex items-center gap-2">
                       <i data-feather="book-open" class="w-4 h-4"></i> Technical Details
                    </a>
                </div>
            </div>
        </div>
    `).join('');

    if (typeof feather !== 'undefined') feather.replace();
}

// Load YouTube Videos (Conditional)
function loadYouTubeVideos() {
    const section = document.getElementById('youtube');
    if (!section) return;

    // Check if channel ID is configured
    if (!config.youtube || !config.youtube.channelId || config.youtube.channelId === 'YOUR_CHANNEL_ID') {
        section.style.display = 'none'; // Hide section if not configured
        return;
    }

    const container = document.getElementById('youtube-videos');
    if (!container) return;

    // ... (Existing YouTube logic would go here if we were keeping it enabled)
}

// Load Blog Posts
function loadBlogPosts() {
    const blogSection = document.querySelector('#blog .grid');
    if (!blogSection) return;

    // Using sample data for now, ideally this comes from a markdown parser or CMS
    // Simplified for this iteration
    const samplePosts = [
        {
            title: "Optimizing CNNs for Edge Devices",
            category: "AI/ML",
            date: "May 2025",
            excerpt: "Techniques for deploying computer vision models on constrained hardware like Raspberry Pi and ESP32.",
            link: "blog.html"
        },
        {
            title: "Designing 4-Layer PCBs for Mixed Signals",
            category: "Electronics",
            date: "April 2025",
            excerpt: "Best practices for stack-up, grounding, and signal integrity in mixed-signal PCB designs.",
            link: "blog.html"
        }
    ];

    blogSection.innerHTML = samplePosts.map(post => `
        <div class="glass p-8 hover:bg-gray-800/30 transition-colors group">
            <div class="flex items-center gap-3 mb-4 text-xs font-mono text-gray-500">
                <span class="text-primary-500">${post.category}</span>
                <span>/</span>
                <span>${post.date}</span>
            </div>
            
            <h3 class="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors">
                ${post.title}
            </h3>
            
            <p class="text-gray-400 text-sm leading-relaxed mb-6">
                ${post.excerpt}
            </p>
            
            <a href="${post.link}" class="text-sm font-mono text-primary-500 hover:text-primary-400 flex items-center gap-2">
                READ_ARTICLE <i data-feather="arrow-right" class="w-4 h-4"></i>
            </a>
        </div>
    `).join('');

    if (typeof feather !== 'undefined') feather.replace();
}

// Load Work Experience
function loadExperience() {
    const container = document.getElementById('experience-scroll-container');
    if (!container || typeof config === 'undefined' || !config.experience) return;

    container.innerHTML = config.experience.map(exp => `
        <div class="glass p-6 w-[340px] md:w-[400px] snap-start flex-shrink-0 whitespace-normal">
            <!-- Company Image with Gradient Background -->
            <div class="relative mb-6">
                <div class="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl -rotate-3"></div>
                <div class="relative w-full h-32 rounded-xl overflow-hidden border-2 border-gray-800 bg-gray-900/50 flex items-center justify-center">
                    <div class="text-4xl font-bold text-primary-500/30">${exp.company.charAt(0)}</div>
                </div>
            </div>
            
            <div class="mb-4">
                <h3 class="text-lg font-bold text-white mb-2">${exp.title}</h3>
                <div class="text-primary-500 font-medium mb-1">${exp.company}</div>
                <div class="flex items-center gap-2 text-xs text-slate-500 font-mono">
                    <i data-feather="calendar" class="w-3 h-3"></i>
                    <span>${exp.period}</span>
                </div>
            </div>
            
            <p class="text-slate-400 text-sm mb-4 leading-relaxed">${exp.description}</p>
            
            <div class="space-y-2">
                ${exp.achievements.slice(0, 3).map(achievement => `
                    <div class="flex items-start gap-2 text-xs text-slate-300">
                        <i data-feather="check" class="text-primary-500 w-3 h-3 flex-shrink-0 mt-0.5"></i>
                        <span>${achievement}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    // Carousel controls
    const scrollLeft = document.getElementById('exp-scroll-left');
    const scrollRight = document.getElementById('exp-scroll-right');

    if (scrollLeft && scrollRight) {
        scrollLeft.addEventListener('click', () => {
            container.scrollBy({ left: -400, behavior: 'smooth' });
        });
        scrollRight.addEventListener('click', () => {
            container.scrollBy({ left: 400, behavior: 'smooth' });
        });
    }

    if (typeof feather !== 'undefined') feather.replace();
}

// Load Random Profile Image
function loadRandomProfileImage() {
    const profileImg = document.getElementById('profile-image-random');
    if (!profileImg) return;

    const images = [
        'assets/profile1.jpg',
        'assets/profile2.jpg',
        'assets/profile3.jpg',
        'assets/profile4.jpg'
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    profileImg.src = images[randomIndex];
}


// Initialization
document.addEventListener('DOMContentLoaded', () => {
    loadSkills();
    loadProjects();
    loadBlogPosts();
    loadYouTubeVideos();
    loadExperience();
    loadRandomProfileImage();

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '50px' });

    document.querySelectorAll('section, .glass').forEach(el => {
        el.style.opacity = '0'; // Initial state
        observer.observe(el);
    });

    if (typeof feather !== 'undefined') feather.replace();
});
