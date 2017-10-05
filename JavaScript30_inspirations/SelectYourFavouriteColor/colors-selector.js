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

function showColor(e) {;
    const color = $(`.color[data-key='${e.keyCode}']`);

    var key = colorKeys.find(function(color) {
        if (color.key == e.keyCode) return this;
    }); //find if pressed key is on the list

    if (key) {
        const page = $('html')
        page.css('background', key.color)

        color.addClass('selected');

        ajustFontColor(key);
    }
}

function ajustFontColor(key) {
    const header = $('.header');

    if (key.color == "black")
        header.addClass("white");
    else
        header.removeClass("white");

}

$('html').on('keydown', showColor);

$('.color').each(function() {
    $(this).on('transitionend', function(e) {
        if (e.originalEvent.propertyName != 'transform') return;
        $(this).removeClass('selected');
    })
});