let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');

function setGradientBackground() {
    document.body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = document.body.style.background + ';';
}

color1.addEventListener('input', setGradientBackground);
color2.addEventListener('input', setGradientBackground);