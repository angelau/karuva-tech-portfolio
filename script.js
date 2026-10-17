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
/* ===== HOMEPAGE INTERACTIONS (only runs on body.home). Paste at the very bottom of script.js ===== */
(function(){
if(!document.body||!document.body.classList.contains('home'))return;
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
document.documentElement.classList.add('js');
const bar=document.createElement('div');bar.id='bar';document.body.prepend(bar);
const nav=$('nav'),links=$('.links'),hero=$('.hero');
const onScroll=()=>{nav.classList.toggle('s',scrollY>30);bar.style.width=scrollY/(document.documentElement.scrollHeight-innerHeight)*100+'%'};
addEventListener('scroll',onScroll,{passive:true});onScroll();
$('#mt').onclick=()=>links.classList.toggle('open');links.onclick=()=>links.classList.remove('open');
hero.addEventListener('mousemove',e=>{const r=hero.getBoundingClientRect();hero.style.setProperty('--mx',e.clientX-r.left+'px');hero.style.setProperty('--my',e.clientY-r.top+'px')});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);const n=x.target.querySelector('[data-n]');if(n)count(n)}}),{threshold:.15});
$$('h2,.sub,.rows>div,.two>div,.pc,details,.stats>div,.tool .two>div,.cg>*').forEach((el,i)=>{el.classList.add('rv');el.style.transitionDelay=(i%4)*90+'ms';io.observe(el)});
function count(n){const t=+n.dataset.n,s=n.dataset.s||'',st=performance.now();(function f(now){const p=Math.min((now-st)/1400,1);n.textContent=Math.round(t*(1-Math.pow(1-p,3)))+(p>=1?s:'');if(p<1)requestAnimationFrame(f)})(st)}
const trk=$('#trk'),pi=$('#pi'),step=()=>trk.firstElementChild.offsetWidth+26;
$('#nx').onclick=()=>trk.scrollBy({left:step(),behavior:'smooth'});
$('#pv').onclick=()=>trk.scrollBy({left:-step(),behavior:'smooth'});
trk.addEventListener('scroll',()=>{const m=trk.scrollWidth-trk.clientWidth,n=trk.children.length;pi.style.width=(100/n+(100-100/n)*(m?trk.scrollLeft/m:0))+'%'},{passive:true});
const sl=$$('.tsl figure'),dt=document.createElement('div');dt.className='dots';$('.tsl').after(dt);let k=0,tm;
sl.forEach((_,i)=>{const d=document.createElement('span');d.onclick=()=>{go(i);auto()};dt.append(d)});
function go(i){k=i;sl.forEach((f,j)=>f.classList.toggle('on',j==i));[...dt.children].forEach((d,j)=>d.classList.toggle('on',j==i))}
function auto(){clearInterval(tm);tm=setInterval(()=>go((k+1)%sl.length),6500)}
go(0);auto();
})();
