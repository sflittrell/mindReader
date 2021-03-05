# Mind Reader

Objects:
    Main Text Block: contains the instructions for the user
    State: contains the information to be shown at any given time (there will be 6, one for every "page")
    Next Button: pressed by the user to change the state of the page forward
    Example Text Block: gives the user and example of what to do as well as further instructions
    Go/Back Button: On initial state this button starts the mind reader, on next 4 states allows user to move the state back, and on the last state it returns to the initial state
    Symbol List: a list of symbols corresponding to numbers 1 - 99
    Answer: The symbol to show up at the end of the game, it must correspond to a number divisible by 9

Variables:
    currentState: the state at that given time (on load the state would be set to 0 because that is the array value of the first page)


State in an array [0, 1, 2, 3, 4, 5, 6]
    each item in the area is an object containing information to be displayed, the text that goes in the text blocks, the functions for the buttons

    State Objects:
        mainText: the string of text that will be displayed in the Main Text Block area
        nextButton: the on click function that changes the state, moving the index forward 1
            Add one to the currentState (this moves you to the next page)
        exampleText: the string of text that will be displayed in the Example Text Block area
        backButton: the on click function that sets the state
            IF currentState === 0 (the start page) change currentState to 1
            IF currentState === 1, 2, 3, or 4 subtract 1 from currentState (this moves back one page)
            If currentState === 5 change currentState to 0 (this moves you back to the beginning of the mind reader game)


Start Program:

    LET specialSym = '';
    LET symbols = [!, @, #, $, %, ^, &, *, ~];
    LET numSymList = [];
    LET currentState = 0

    function random() {
        Math.floor(Math.random() * 10); // finds a random number between 0 and 9
    }

    function specSym() {
        symbols[random()] //random symbol from the symbols array
    }

    function numSym() {
        create a loop that generates a list of numbers 0 - 99 and adds a corresponding symbol to the number (FOR (let i = 0; i < 100; i++))
        IF the number is a factor of 9 then add the specialSymbol (IF i % 9 === 0) numSymList.push(i + specSym)
        ELSE add a random symbol from the symbols array that doesn't include the specialSymbol (i + symbols[random()])
    }

    function render() {
        CREATE the mainText using the value from the State object
        CREATE the nextButton using the value from the State object
        CREATE the exampleText using the value from the State object
        CREATE the backButton using teh value from the State object
    }