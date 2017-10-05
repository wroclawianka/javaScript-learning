var randomIndex = function(array) {
    return Math.floor(Math.random() * array.length);
}

function randomElement(array) {
    return array[randomIndex(array)]
}

function printRandomElement(array) {
    $('#randomSeries').text(answer(array));
}

function answer(array) {
    var emptyListAlert = "Select any TV series!"
    return (array.length == 0) ? emptyListAlert : `TV series to see today is ${randomElement(array)}.`;
}

function pushCheckedElementsToArray(array) {
    var listOfSeries = $('input:checked~span')
    listOfSeries.each(function() {
        array.push(this.innerHTML)
    })
}

function createSectionForEachElement(array) {
    for (element of array) {
        createSection(element)
    }
}

function createSection(content) {
    var seriesList = "div[name='seriesList']"

    var row = $("<div class='checkbox'></div>")
    $(seriesList).append(row)

    var label = $('<label></label>')
    $(seriesList + '>div.checkbox:last-child').append(label)

    var input = $("<input type='checkbox' name='series'>")
    $(seriesList + '>div.checkbox:last-child>label').append(input)

    var span = $('<span></span>').text(content)
    $(seriesList + '>div:last-child>label>input').after(span)
}

var top10series = ['Game of Thrones', 'Ozark', 'Rick and Morty', 'Suits', 'The Walking Dead',
    'Orange Is the New Black', 'Stranger Things', 'Shameless', 'Vikings', "The Handmaid's Tale"
]

var series = []

createSectionForEachElement(top10series)

$('#submit').on('click', function() {
    pushCheckedElementsToArray(series)
    printRandomElement(series)
});