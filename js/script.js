let numberShown = null;
let numberNotShown = null;
let whatToDo = null;

const numberElement = document.getElementById("currentNumText");

function updateNumber() {
    numberElement.textContent = numberShown;
}

function numPressed(num) {
    if (numberShown == null) {
        numberShown = num;
    }
    else {
        numberShown = String(numberShown) + String(num);
        numberShown = Number(numberShown);
    }
    updateNumber();
}

function restartCalculator() {
    numberShown = null;
    numberNotShown = null;
    whatToDo = null;
    updateNumber();
}

function backspace() {
    if (numberShown !== null) {
        // Convert numberShown to a string
        numberShown = String(numberShown);

        // Remove the last character
        numberShown = numberShown.substring(0, numberShown.length - 1);

        // Convert back to a number, or set to null if it's an empty string
        numberShown = numberShown.length > 0 ? Number(numberShown) : null;
        updateNumber();
    }
}

function storeShownNumber() {
    numberNotShown = numberShown;
    numberShown = null;
}

function equal() {
    if (whatToDo == "add") {
        numberShown = numberNotShown + numberShown;
    }
    else if (whatToDo == "sub") {
        numberShown = numberNotShown - numberShown;
    } else if (whatToDo == "multi") {
        numberShown = numberNotShown * numberShown;
    } else if (whatToDo == "divide") {
        numberShown = numberNotShown / numberShown;
    }

    numberNotShown = null;
    whatToDo = null;
    updateNumber();
}

function doButton(doing) {
    if (numberShown !== null) {
        if (numberNotShown == null) {
            storeShownNumber();
        }
        else {
            equal()
        }
    }
    whatToDo = doing;
    updateNumber();
}