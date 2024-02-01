document.addEventListener('click', (event) => {
    textAnimate(event.clientX, event.clientY, 10);
});

const textArray = ['aishwarya-gowri', 'ऐश्वर्या-गौरी', 'ایشوریہ گووری', 'ஐஸ்வர்யா-கௌரி', 'ఐశ్వర్యా-కౌరి'];

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
function textAnimate(x, y, count) {
    for (let i = 0; i < count; i++) {
        const randomText = getRandomElement(textArray);

        const animatedText = document.createElement('div');
        animatedText.innerText = randomText;
        animatedText.className = 'animated-text';
        animatedText.style.left = `${x}px`;
        animatedText.style.top = `${y}px`;
        document.body.appendChild(animatedText);

        anime({
            targets: animatedText,
            translateX: anime.random(-100, 100),
            translateY: anime.random(-100, 100),
            rotate: anime.random(-100, 100),
            scale: [0, 1],
            duration: 1000,
            easing: 'easeInOutQuad',
            opacity: [1, 0],
            complete: () => {
                animatedText.remove();
            },
        });
    }
}

