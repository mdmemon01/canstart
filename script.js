// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.md\\:hidden button');
    const nav = document.querySelector('nav');
    
    // Create mobile menu if it doesn't exist
    let mobileMenu = document.getElementById('mobile-menu');
    if (!mobileMenu) {
        mobileMenu = document.createElement('div');
        mobileMenu.id = 'mobile-menu';
        mobileMenu.className = 'md:hidden hidden';
        mobileMenu.innerHTML = `
            <div class="px-2 pt-2 pb-3 space-y-1 bg-dark/95 backdrop-blur-sm border-t border-dark-border">
                <a href="#home" class="text-slate-300 hover:text-primary hover:bg-slate-800/50 block px-3 py-2 rounded-md text-base font-medium transition-colors">Home</a>
                <a href="#solutions" class="text-slate-300 hover:text-primary hover:bg-slate-800/50 block px-3 py-2 rounded-md text-base font-medium transition-colors">Solutions</a>
                <a href="#services" class="text-slate-300 hover:text-primary hover:bg-slate-800/50 block px-3 py-2 rounded-md text-base font-medium transition-colors">Development</a>
                <a href="#about" class="text-slate-300 hover:text-primary hover:bg-slate-800/50 block px-3 py-2 rounded-md text-base font-medium transition-colors">About</a>
                <a href="#contact" class="bg-primary text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition-colors">Contact</a>
            </div>
        `;
        nav.querySelector('.max-w-7xl').appendChild(mobileMenu);
    }
    
    const menuIcon = mobileMenuButton.querySelector('svg');
    let isMenuOpen = false;
    
    // Toggle menu function
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            // Show menu
            mobileMenu.classList.remove('hidden');
            // Change hamburger to X
            menuIcon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            `;
        } else {
            // Hide menu
            mobileMenu.classList.add('hidden');
            // Change X back to hamburger
            menuIcon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            `;
        }
    }
    
    // Click event for hamburger button
    mobileMenuButton.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on nav links
    const mobileNavLinks = mobileMenu.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) {
                toggleMenu();
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (isMenuOpen && !nav.contains(e.target)) {
            toggleMenu();
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMenuOpen) {
            toggleMenu();
        }
    });
    
    // Smooth scrolling for all nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});