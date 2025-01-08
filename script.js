
// Smooth scrolling for navigation links
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
    const hero = document.getElementById('hero');
    const about = document.getElementById('about');
    const projects = document.getElementById('projects');
    const contant = document.getElementById('contact');
    const scrollY = window.scrollY;

    // Parallax effect for the hero section
    hero.style.backgroundPositionY = `${scrollY * 0.5}px`;

    // Parallax effect for the projects section
    const projectsOffset = projects.offsetTop;
    if (scrollY >= projectsOffset) {
        projects.style.backgroundPositionY = `${(scrollY - projectsOffset) * 0.5}px`;
    }
});
