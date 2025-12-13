class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
                <div class="container mx-auto px-6 py-4">
                    <div class="flex items-center justify-between">
                        <a href="index.html" class="flex items-center gap-3 text-2xl font-bold font-mono hover:scale-105 transition-transform">
                            <img src="assets/logo.png" alt="E-WOLF Logo" class="w-10 h-10">
                            <span class="text-white">E-<span class="text-primary-500">WOLF</span></span>
                        </a>
                        <div class="hidden md:flex items-center gap-8">
                            <a href="index.html" class="text-gray-300 hover:text-primary-500 transition-colors">Home</a>
                            <a href="projects.html" class="text-gray-300 hover:text-primary-500 transition-colors">Projects</a>
                            <a href="research.html" class="text-gray-300 hover:text-primary-500 transition-colors">Research</a>
                            <a href="blog.html" class="text-gray-300 hover:text-primary-500 transition-colors">Blog</a>
                            <a href="contact.html" class="text-gray-300 hover:text-primary-500 transition-colors">Contact</a>
                        </div>
                        <button id="mobile-menu-btn" class="md:hidden text-gray-300 hover:text-white">
                            <i data-feather="menu"></i>
                        </button>
                    </div>
                    <div id="mobile-menu" class="hidden md:hidden mt-4 pb-4">
                        <div class="flex flex-col gap-4">
                            <a href="index.html" class="text-gray-300 hover:text-primary-500 transition-colors">Home</a>
                            <a href="projects.html" class="text-gray-300 hover:text-primary-500 transition-colors">Projects</a>
                            <a href="research.html" class="text-gray-300 hover:text-primary-500 transition-colors">Research</a>
                            <a href="blog.html" class="text-gray-300 hover:text-primary-500 transition-colors">Blog</a>
                            <a href="contact.html" class="text-gray-300 hover:text-primary-500 transition-colors">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        `;

        // Mobile menu toggle
        const menuBtn = this.querySelector('#mobile-menu-btn');
        const mobileMenu = this.querySelector('#mobile-menu');

        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Initialize feather icons after rendering
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }
}

customElements.define('custom-navbar', CustomNavbar);
