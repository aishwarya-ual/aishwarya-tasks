document.addEventListener("DOMContentLoaded", function () {
    const parallaxElements = document.querySelectorAll('.bgimg');

    function updateParallax() {
        parallaxElements.forEach(function (element) {
            const scrollSpeed = parseFloat(element.dataset.scrollSpeed) || 1;
            const yOffset = window.pageYOffset;
            const elementOffset = element.offsetTop;

            const translateValue = (yOffset - elementOffset) * scrollSpeed;
            element.style.transform = 'translateY(' + translateValue + 'px)';
        });
    }

    window.addEventListener('scroll', updateParallax);
    updateParallax(); // Initial call to set the initial position
});
