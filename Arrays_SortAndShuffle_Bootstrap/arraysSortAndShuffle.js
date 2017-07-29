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
    var result = [input[0]];

    for (var i = 1; i < input.length; i++) {
        if (input[i] < result[result.length - 1]) {

            for (var x = 0; x < result.length; x++) {
                if (result[x] >= input[i]) {

                    result.splice(x, 0, input[i]);
                    break;
                }
            }
        } else {
            result.push(input[i]);
        }
    }
    return result;
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