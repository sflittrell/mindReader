
let specialSym = '';
let symbols = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '?'];
let numSymList = '';
let currentState = 0;

function random() {
    return Math.floor(Math.random() * 10); // creates a random number between 0 - 9
}

function specSym() {
    return symbols[random()]; // picks a random symbol from the symbol array and assigns it to the specialSym variable
}

function addSym() {
    numSymList = ''
    specialSym = specSym(); //sets the special symbol
    for (let i = 0; i < 100; i++) {
        if (i % 9 === 0) {
            numSymList += (i + ' - ' + specialSym + '<br>');
        } else {
            numSymList += (i + ' - ' + specSym() + '<br>');
        }
    }
    return numSymList;
}

function symReset() {
    state.mainText[4] = numSymList;
    state.mainText[5] = specialSym;
    state.exampleText[5] = 'Your symbol is: ' + specialSym;
}

function next() {
    currentState += 1;
    render();
}

function back() {
    currentState -= 1;
    render();
}

function reset() {
    currentState = 0;
    specSym();
    addSym();
    symReset();
    render();
}

function backButton() {
    if (currentState === 0) {
        next();
    } else if (currentState > 0 && currentState < 5) {
        back();
    } else {
        reset();
    }
}

// addSym();
// specSym();


let state = {
    mainText: ['I can read your mind', 'Pick a number from 01 - 99', 'Add both digits together to get a new number', 'Subtract your new number from the original numbers', numSymList, specialSym],
    nextButton: ['invisible', 'visible', 'visible', 'visible', 'visible', 'invisible'],
    exampleText: ['', 'when you have your number click next', 'Ex: 14 is 1 + 4 = 5 click next to proceed', 'Ex: 14 - 5 = 9 click next to proceed', 'Scroll to find your new Number. Note the symbol beside the number', 'Your symbol is: ' + specialSym],
    backButton: ['GO', 'Back', 'Back', 'Back', 'Back', 'Reset'],
}

function render() {
    document.getElementById('header').innerHTML = state.mainText[currentState];
    document.getElementById('cloak').setAttribute('class', state.nextButton[currentState]);
    document.getElementById('exampleText').innerHTML = state.exampleText[currentState];
    document.getElementById('backBtn').innerHTML = state.backButton[currentState];
}

reset();