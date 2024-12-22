document.addEventListener('DOMContentLoaded', () => {
    // Add random movement to stars
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        star.style.left = `${randomX}px`;
        star.style.top = `${randomY}px`;
    });

    // Add mousemove parallax effect
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        stars.forEach(star => {
            const speed = parseFloat(star.getAttribute('data-speed') || 0.2);
            const x = (window.innerWidth - mouseX * 100 * speed);
            const y = (window.innerHeight - mouseY * 100 * speed);
            star.style.transform = `translate(${x * 0.01}px, ${y * 0.01}px)`;
        });
    });

    // Add random sparkle positions
    const sparkles = document.querySelectorAll('.sparkle');
    sparkles.forEach(sparkle => {
        setInterval(() => {
            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * window.innerHeight;
            sparkle.style.left = `${randomX}px`;
            sparkle.style.top = `${randomY}px`;
        }, 4000);
    });
});
