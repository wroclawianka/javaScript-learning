var randomIndex = function(array) {
    var temp = Math.floor(Math.random() * array.length)
    return temp;
};

function selectRandomElement(array) {
    return array[randomIndex(array)];
};

function printRandomElement(array) {
    document.getElementById("randomSeries").innerHTML = "TV series to see today is " + selectRandomElement(array) + ".";
};

function pushCheckedElementsToArray(array) {
    var listOfSeries = $("input:checked~span")

    for (elem of listOfSeries) {
        array.push(elem.innerHTML);
    }
};

function submit() {
    pushCheckedElementsToArray(series);
    printRandomElement(series);
};

function createSectionForEachElement(array) {
    for (element of array) {
        createSection(element);
    }
}

function createSection(content) {
    var seriesList = "div[name='seriesList']";

    var row = $("<div class='checkbox'></div>");
    $(seriesList).append(row);

    var label = $("<label></label>");
    $(seriesList + ">div.checkbox:last-child").append(label);

    var input = $("<input type='checkbox' name='series'><br>");
    $(seriesList + ">div.checkbox:last-child>label").append(input);

    var span = $("<span></span>").text(content);
    $(seriesList + ">div:last-child>label>input").after(span);
}

var top10series = ["Game of Thrones", "Ozark", "Rick and Morty", "Suits", "The Walking Dead",
    "Orange Is the New Black", "Stranger Things", "Shameless", "Vikings", "The Handmaid's Tale"
];

var series = [];

createSectionForEachElement(top10series);