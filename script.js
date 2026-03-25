document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Simple Scroll Animation for Feature Cards
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.5, 0, 0, 1)';
        observer.observe(card);
    });

    // 3. Log initialisation simulation in terminal mockup
    const highlightCard = document.querySelector('.highlight-card');
    if (highlightCard) {
        setInterval(() => {
            highlightCard.style.backgroundColor = 'rgba(56, 189, 248, 0.15)';
            setTimeout(() => {
                highlightCard.style.backgroundColor = 'rgba(56, 189, 248, 0.05)';
            }, 500);
        }, 3000);
    }
});
