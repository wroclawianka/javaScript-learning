function shuffle(array) {
    for (var i = 0; i < array.length; i++) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        var randomElement = array[randomIndex];

        array[randomIndex] = array[i];
        array[i] = randomElement;
    }
    return array;
}

function sort(array) {
    for (var index = 0; index < array.length; index++) {

        for (var i = index + 1; i < array.length; i++) {
            var elementToCompare = array[i]
            if (array[index] > elementToCompare) {

                for (var x = i; x >= index + 1; x--) {
                    array[x] = array[x - 1];
                }
                array[index] = elementToCompare;
            }
        }
    }
    return array;
}

function indicateArithmeticMeanOfTheProcess(process, n, lengthOfArray) {
    var results = [];

    for (var i = 0; i < n; i++) {
        var array = createRandomArray(lengthOfArray);
        var time = new Date().getTime();
        process(array);
        results.push(new Date().getTime() - time);
    }

    var sum = results.reduce((a, b) => a + b, 0);
    var avg = sum / results.length;
}

function createRandomArray(amount) {
    var array = [];

    for (i = 0; i < amount; i++) {
        array.push(Math.floor(Math.random() * (100)));
    }
    return array;
}

String.prototype.isLengthBeetwen = function(min, max) {
    var warning = $("#warning");

    if (this < min) {
        warning.text(`Min length of the list is ${min}`);

    } else if (this > max) {
        warning.text(`Max length of the list is ${max}`);

    } else {
        return true;
    }
    return false;
}

function setValue(elementId, value) {
    $(`#${elementId}`).text(value);
}

function setIfButtonDisabled(elementId, ifDisabled) {
    $(`#${elementId}`).prop('disabled', ifDisabled);
}

function createArray() {
    var userInput = document.getElementById("length").value;

    if (userInput.isLengthBeetwen(1, 25)) {

        array = createRandomArray(userInput);

        $("#array").addClass("active");
        setValue("array-value", array)

        setIfButtonDisabled("sort", false);
        setIfButtonDisabled("shuffle", false);
    }
}

function sortArray() {
    $("#array-sorted").addClass("active");
    setValue("array-sorted-value", sort(array));

    setIfButtonDisabled("sort", true);
}

function suffleArray() {
    $("#array-shuffled").addClass("active");
    setValue("array-shuffled-value", shuffle(array));
}

function submit() {
    if (array.length > 0) {
        array = [];
        $('.value').text("");
        $("#array-sorted").removeClass("active");
        $("#array-shuffled").removeClass("active");
    }
    createArray();
}

var array = [];
$('#submit').on('click', submit);
$('#sort').on('click', sortArray);
$('#shuffle').on('click', suffleArray);