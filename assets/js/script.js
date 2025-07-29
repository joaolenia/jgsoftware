document.addEventListener('DOMContentLoaded', () => {
    const animatedSections = document.querySelectorAll('.animated-section');

    if (animatedSections.length === 0) {
        return;
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, 
        threshold: 0.1 
    });

    animatedSections.forEach(section => {
        observer.observe(section);
    });
});