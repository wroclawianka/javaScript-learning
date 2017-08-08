Array.prototype.shuffle = function() {
    var input = this;

    for (var i = 0; i < input.length; i++) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        var randomElement = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = randomElement;
    }
    return input;
}

Array.prototype.sort = function() {
    var input = this;

    for (var index = 0; index < input.length; index++) {

        for (var i = index + 1; i < input.length; i++) {

            var elementToCompare = input[i]

            if (input[index] > elementToCompare) {
                debugger;
                for (var x = i; x >= index + 1; x--) {
                    input[x] = input[x - 1];
                }
                input[index] = elementToCompare;
            }
        }
    }
    return input;
}

function createArray() {
    var userInput = document.getElementById("length").value;

    for (i = 0; i < userInput; i++) {

        array.push(Math.floor(Math.random() * (100)));
    }

    document.getElementById("array").innerHTML = "My list: " + array;

    document.getElementById("create").disabled = true;
    document.getElementById("sort").disabled = false;
    document.getElementById("shuffle").disabled = false;
}

function sortArray() {

    document.getElementById("array-sorted").innerHTML = "My sorted list: " + array.sort();
    document.getElementById("sort").disabled = true;
}

function suffleArray() {
    document.getElementById("array-shuffled").innerHTML = "My shuffled list: " + array.shuffle();
}

var array = [];
document.getElementById("sort").disabled = true;
document.getElementById("shuffle").disabled = true;