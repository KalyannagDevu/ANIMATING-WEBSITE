// On window load, activate all animations
window.addEventListener("load", () => {
    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach(el => {
        el.classList.add('animate-active');
    });
});
