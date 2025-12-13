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

    // Company logo mapping
    const companyLogos = {
        'Southern Utah University': 'assets/companies/suu.png',
        'GAF': 'assets/companies/gaf.png',
        'Vivint': 'assets/companies/vivint.png',
        'Freelancer': 'assets/companies/freelancer.png'
    };

    container.innerHTML = config.experience.map(exp => {
        const logoPath = companyLogos[exp.company] || '';

        return `
        <div class="glass p-6 w-[340px] md:w-[380px] h-[520px] snap-start flex-shrink-0 whitespace-normal hover:border-primary-500/30 transition-all flex flex-col">
            <!-- Job Title Header (Fixed Height) -->
            <div class="h-14 flex items-center justify-center mb-6">
                <h3 class="text-lg font-bold text-white text-center leading-tight">${exp.title}</h3>
            </div>

            <!-- Company Logo Container (Fixed Height) -->
            <div class="relative mb-6 rounded-lg p-6 flex items-center justify-center h-32">
                ${logoPath ? `
                    <img src="${logoPath}" alt="${exp.company} logo" 
                         class="max-w-full max-h-28 object-contain"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="text-5xl font-bold text-primary-500/20 hidden items-center justify-center">${exp.company.charAt(0)}</div>
                ` : `
                    <div class="text-5xl font-bold text-primary-500/20">${exp.company.charAt(0)}</div>
                `}
            </div>
            
            <!-- Company Name & Period (Fixed Height) -->
            <div class="mb-4 text-center h-14 flex flex-col justify-center">
                <div class="text-slate-400 font-medium text-sm mb-1">${exp.company}</div>
                <div class="text-slate-500 text-xs font-mono">${exp.period}</div>
            </div>
            
            <!-- Description (Flexible) -->
            <p class="text-slate-300 text-sm mb-4 leading-relaxed text-center flex-1">${exp.description}</p>
            
            <!-- Learn More Button -->
            <div class="pt-4 border-t border-gray-800">
                <button class="w-full py-2.5 px-4 bg-gray-800/50 hover:bg-gray-800 text-slate-300 hover:text-primary-500 rounded-lg text-sm font-medium transition-all">
                    Learn More
                </button>
            </div>
        </div>
    `}).join('');

    // Carousel controls
    const scrollLeft = document.getElementById('exp-scroll-left');
    const scrollRight = document.getElementById('exp-scroll-right');

    if (scrollLeft && scrollRight) {
        scrollLeft.addEventListener('click', () => {
            container.scrollBy({ left: -380, behavior: 'smooth' });
        });
        scrollRight.addEventListener('click', () => {
            container.scrollBy({ left: 380, behavior: 'smooth' });
        });
    }

    if (typeof feather !== 'undefined') feather.replace();
}

// Load Random Profile Image - DISABLED (using fixed profile.jpeg now)
function loadRandomProfileImage() {
    // No longer needed - using fixed profile.jpeg
    return;

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

// Load Education
function loadEducation() {
    const container = document.getElementById('education-container');
    if (!container || typeof config === 'undefined' || !config.education) return;

    container.innerHTML = config.education.map(edu => `
        <div class="glass p-6 hover:border-primary-500/30 transition-all">
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div class="flex-1">
                    <h3 class="text-xl font-bold text-white mb-2">${edu.degree}</h3>
                    ${edu.minor ? `<p class="text-secondary-500 font-medium mb-2">${edu.minor}</p>` : ''}
                    <p class="text-slate-400 font-medium">${edu.institution}</p>
                    <p class="text-slate-500 text-sm">${edu.location}</p>
                </div>
                <div class="text-left md:text-right">
                    <p class="text-primary-500 font-mono font-semibold">${edu.year}</p>
                    ${edu.gpa ? (edu.gpa.includes(',') ?
            edu.gpa.split(',').map((gpa, index) => `<p class="text-slate-400 text-sm ${index === 0 ? 'mt-2' : 'mt-0.5'}">${gpa.trim()}</p>`).join('')
            : `<p class="text-slate-400 text-sm mt-1">${edu.gpa}</p>`)
            : ''}
                </div>
            </div>
            ${edu.description ? `<p class="text-slate-300 text-sm leading-relaxed">${edu.description}</p>` : ''}
        </div>
    `).join('');

    if (typeof feather !== 'undefined') feather.replace();
}


// Initialization
document.addEventListener('DOMContentLoaded', () => {
    loadSkills();
    loadProjects();
    loadBlogPosts();
    loadYouTubeVideos();
    loadExperience();
    loadEducation();
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
