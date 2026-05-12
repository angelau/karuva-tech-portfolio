const projects = [
    {
        title: "NGO Impact Platform",
        description: "A custom platform optimized for low-bandwidth environments. Focused on accessibility and high performance to ensure community outreach remains effective across all devices.",
        tech: "HTML5, CSS Grid, JavaScript",
        link: "https://pilexcentre.org", // Ensure this is your live link
        status: "Live & Completed"
    },
    {
        title: "Talent Competition Hub",
        description: "A comprehensive digital portal for a large-scale talent event. Features include real-time contestant tracking and automated scoring workflows.",
        tech: "Modern Web Stack, Workflow Automation",
        link: "https://thechurchgottalent.com.ng", 
        status: "Live & Completed"
    },
    {
        title: "Karuva Tech Agency Site",
        description: "The professional digital hub for my agency, showcasing bespoke front-end builds with smooth CSS animations and 100/100 performance scores.",
        tech: "Vanilla JS, CSS Keyframes, WebP",
        link: "#",
        status: "Active"
    }
];

const projectGrid = document.getElementById('project-grid');

function renderProjects() {
    projectGrid.innerHTML = projects.map(project => `
        <div class="project-card vibe-fade">
            <span class="status-tag">${project.status}</span>
            <h4>${project.title}</h4>
            <p>${project.description}</p>
            <div class="tech-stack-list">
                ${project.tech}
            </div>
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">
                Visit Live Site →
            </a>
        </div>
    `).join('');
}

renderProjects();



const observeVibe = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('vibe-fade'); // Add the animation class
            observeVibe.unobserve(entry.target); // Stop observing once animated
        }
    });
}, { threshold: 0.1 }); 


const projectCards = document.querySelectorAll('.project-card');
const galleryItems = document.querySelectorAll('.gallery-item');
const skillCategories = document.querySelectorAll('.skill-category');


projectCards.forEach(card => observeVibe.observe(card));
galleryItems.forEach(item => observeVibe.observe(item));
skillCategories.forEach(cat => observeVibe.observe(cat));