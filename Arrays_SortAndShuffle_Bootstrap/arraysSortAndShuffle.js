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

function createRandomArray(amound) {
    var array = [];
    for (i = 0; i < amound; i++) {
        var temp = Math.floor(Math.random() * 100 + 1);
        array.push(temp);
    }
    return array;
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

    document.getElementById("array-sorted").innerHTML = "My sorted list: " + sort(array);
    document.getElementById("sort").disabled = true;
}

function suffleArray() {
    document.getElementById("array-shuffled").innerHTML = "My shuffled list: " + shuffle(array);
}

var array = [];
document.getElementById("sort").disabled = true;
document.getElementById("shuffle").disabled = true;