/* ==========================================================================
   1. PROJECT DATA ARCHITECTURE
   ========================================================================== */
const projects = [
    {
        title: "NGO Impact Platform",
        description: "A custom platform optimized for low-bandwidth environments. Focused on accessibility and high performance to ensure community outreach remains effective across all devices.",
        tech: "HTML5, CSS Grid, JavaScript",
        link: "projects/pilex-centre.html",
        linkText: "View Case Study",
        external: false,
        status: "Live & Completed"
    },
    {
        title: "Talent Competition Hub",
        description: "A comprehensive digital portal for a large-scale talent event. Features include real-time contestant tracking and automated scoring workflows.",
        tech: "Modern Web Stack, Workflow Automation",
        link: "projects/gospel-talent.html",
        linkText: "View Case Study",
        external: false,
        status: "Live & Completed"
    },
    {
        title: "Free Website Health Check Tool",
        description: "A tool I built that scans any website and tells business owners what's broken in plain English.",
        tech: "Node.js, Express, Puppeteer",
        link: "https://audit.karuvatech.com.ng",
        linkText: "Visit Live Site",
        external: true,
        status: "Active"
    }
];

/* ==========================================================================
   2. DYNAMIC COMPONENT RENDERING ENGINE
   ========================================================================== */
const projectGrid = document.getElementById('project-grid');

function renderProjects() {
    if (!projectGrid) return;

    projectGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <span class="status-tag">${project.status}</span>
            <h4>${project.title}</h4>
            <p>${project.description}</p>
            <div class="tech-stack-list">
                ${project.tech}
            </div>
            <a href="${project.link}" ${project.external ? 'target="_blank" rel="noopener noreferrer"' : ''} class="project-link">
                ${project.linkText} &rarr;
            </a>
        </div>
    `).join('');
}

// Complete immediate layout initialization
renderProjects();

/* ==========================================================================
   3. ROAD 9 INTERACTION ENGINE & SCROLL DETECTORS
   ========================================================================== */
// Update Top Progress Bar Position dynamically
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) progressBar.style.width = scrolled + '%';
});

// Structural Reveal Observers
const observeRevealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px"
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('vibe-active');
            revealObserver.unobserve(entry.target); // Trigger exactly once
        }
    });
}, observeRevealOptions);

// Select elements for observation after layout execution
const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach(element => revealObserver.observe(element));

/* ==========================================================================
   4. MOBILE NAVIGATION CONTROLLER
   ========================================================================== */
const menuTrigger = document.getElementById('mobile-menu-trigger');
const navContainer = document.getElementById('nav-links-container');
const bodyOverlay = document.body;

if (menuTrigger && navContainer) {
    // Toggle the visible state of the mobile side-menu
    menuTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        menuTrigger.classList.toggle('toggle-active');
        navContainer.classList.toggle('mobile-nav-active');
    });

    // Close the sidebar menu automatically when a structural section link is pressed
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuTrigger.classList.remove('toggle-active');
            navContainer.classList.remove('mobile-nav-active');
        });
    });

    // Close overlay instantly if the user taps outside the structural list container
    document.addEventListener('click', (e) => {
        if (!navContainer.contains(e.target) && !menuTrigger.contains(e.target)) {
            menuTrigger.classList.remove('toggle-active');
            navContainer.classList.remove('mobile-nav-active');
        }
    });
}
