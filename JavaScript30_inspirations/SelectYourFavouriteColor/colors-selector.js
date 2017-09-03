function Color(key, color) {
    this.key = key;
    this.color = color;
}

var colorKeys = [
    new Color(87, "white"),
    new Color(82, "red"),
    new Color(89, "yellow"),
    new Color(73, "pink"),
    new Color(79, "orange"),
    new Color(80, "purple"),
    new Color(65, "black"),
    new Color(71, "green"),
    new Color(76, "blue")
];

function showColor(e) {
    const color = document.querySelector(`.color[data-key="${e.keyCode}"]`);

    var key = colorKeys.find(function(color) {
        if (color.key == e.keyCode) return this;
    }); //find if pressed key is on the list

    if (key) {
        const page = document.querySelector('html')
        page.style.background = key.color; //change background of page

        color.classList.add('selected');

        ajustFontColor(key);
    }
}

function ajustFontColor(key) {
    const header = document.querySelector('.header');

    if (key.color == "black")
        header.classList.add("white");
    else
        header.classList.remove("white");

}

function removeTransition(e) {
    if (e.propertyName != 'transform') return;
    this.classList.remove('selected');
}

window.addEventListener('keydown', showColor);
const keys = document.querySelectorAll('.color');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));