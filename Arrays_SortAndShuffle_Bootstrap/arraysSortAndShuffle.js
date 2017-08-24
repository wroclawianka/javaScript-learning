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
    var warning = document.getElementById("warning");

    if (this < min) {
        warning.innerHTML = "Min length of the list is " + min;

    } else if (this > max) {
        warning.innerHTML = "Max length of the list is " + max;

    } else {
        return true;
    }
    return false;
}

function setAsActive(elementId) {
    document.getElementById(elementId).setAttribute("class", "row active");
    screenY
}

function setAsDisactive(elementId) {
    document.getElementById(elementId).setAttribute("class", "row inactive");
}

function setValue(elementId, value) {
    document.getElementById(elementId).innerHTML = value;
}

function setIfButtonDisabled(elementId, ifDisabled) {
    document.getElementById(elementId).disabled = ifDisabled;
}

function createArray() {
    var userInput = document.getElementById("length").value;

    if (userInput.isLengthBeetwen(1, 1000)) {

        array = createRandomArray(userInput);

        setAsActive("array");
        setValue("array-value", array)

        setIfButtonDisabled("sort", false);
        setIfButtonDisabled("shuffle", false);
    }
}

function sortArray() {
    setAsActive("array-sorted");
    setValue("array-sorted-value", sort(array));

    setIfButtonDisabled("sort", true);
}

function suffleArray() {

    setAsActive("array-shuffled");
    setValue("array-shuffled-value", shuffle(array));
}

function submit() {
    if (array.length > 0) {
        array = [];

        setValue("array-sorted-value", " ");
        setValue("array-shuffled-value", " ");
        debugger;
        setAsDisactive("array-sorted");
        setAsDisactive("array-shuffled");
    }
    createArray();
}


var array = [];

setIfButtonDisabled("sort", true);
setIfButtonDisabled("shuffle", true);