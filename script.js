/* =========================================
   1. 打字機特效
   ========================================= */
document.addEventListener("DOMContentLoaded", function() {
    const textToType = "Master Crypto Analysis & AI Workflows.";
    const typeElement = document.getElementById('typing-text');
    if (typeElement) {
        let typeIndex = 0;
        function typeWriter() {
            if (typeIndex < textToType.length) {
                typeElement.innerHTML += textToType.charAt(typeIndex);
                typeIndex++;
                setTimeout(typeWriter, 50);
            }
        }
        setTimeout(typeWriter, 500);
    }
});

/* =========================================
   2. 滾動淡入
   ========================================= */
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); }
    });
}, observerOptions);
document.querySelectorAll('.reveal-on-scroll').forEach((el) => { observer.observe(el); });

/* =========================================
   3. 3D 懸浮傾斜 (Optimized)
   ========================================= */
document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.1s ease-out';
        card.style.transitionDelay = '0s';
    });
    card.addEventListener('mousemove', (e) => {
        card.style.transitionDelay = '0s';
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.5s ease-out';
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});