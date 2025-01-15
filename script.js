document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    const heroTexts = document.querySelectorAll('#hero h1, #hero p');
    const projectsHeader = document.querySelector('#projects h2');
    const scrollY = window.scrollY;

    // Parallax background effect
    const hero = document.getElementById('hero');
    const projects = document.getElementById('projects');
    hero.style.backgroundPositionY = `${scrollY * 0.5}px`;

    const projectsOffset = projects.offsetTop;
    if (scrollY >= projectsOffset) {
        projects.style.backgroundPositionY = `${(scrollY - projectsOffset) * 0.5}px`;
    }

    // Trigger animations for hero texts
    heroTexts.forEach((text) => {
        if (scrollY + window.innerHeight > text.offsetTop + 100) {
            text.style.animationPlayState = 'running';
        }
    });

    // Trigger animation for projects header
    if (scrollY + window.innerHeight > projectsHeader.offsetTop + 100) {
        projectsHeader.style.animationPlayState = 'running';
    }
});

// Select all elements with the 'animate' class
const animatedElements = document.querySelectorAll('.animate');

// Intersection Observer to handle animations on scroll
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
);

// Attach observer to all animated elements
animatedElements.forEach(el => observer.observe(el));