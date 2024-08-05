// script.js
document.addEventListener("DOMContentLoaded", function() {
    const icons = document.querySelectorAll('.social-media img');

    icons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.2)';
        });
        icon.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
