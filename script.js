const animateBtn = document.getElementById("animateBtn");

animateBtn.addEventListener("click", () => {
    // Animate the button using GSAP
    gsap.fromTo(animateBtn, { y: 0 }, { y: -10, yoyo: true, repeat: 1, duration: 0.5 });
});

// Scroll to section smoothly when clicking on navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        gsap.to(window, {duration: 1, scrollTo: {y: targetSection.offsetTop}});
    });
});
