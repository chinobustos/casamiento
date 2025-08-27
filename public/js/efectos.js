document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector("h1");
    const text = "¡Nos Casamos!";

    // Efecto máquina de escribir
    setTimeout(() => {
        h1.style.opacity = "1";
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                h1.textContent += text[i];
                i++;
            } else {
                clearInterval(typing);
                setTimeout(() => { h1.style.borderRight = "none"; }, 1000);
            }
        }, 100);
    }, 1400);

    // Animaciones al hacer scroll
    const elements = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});
