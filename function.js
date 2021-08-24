//Operator functions


function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2) {
    return (num1 - num2);
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(dividend, divisor){
    if (dividend % divisor != 0) {
        result = dividend/divisor;
        if (countDecimals(result) > 8){
            return result.toFixed(8);
        }
        else
        return result;
    }
    else return dividend/divisor;
}

function operate(opr, num1, num2) {
    switch (opr) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        
        case '/':
            return divide(num1, num2);
            break;
    }
}
let currentNumOne = '';
let currentOperator = '';
let currentNumTwo = '';
let currentVal = '';


function numDisplay(numD) {
    let displayEl = document.querySelector('.display');
    displayEl.textContent = numD;
    currentVal = numD;
}

//add event listener to numbers
let numButtons = Array.from(document.getElementsByClassName('number'));
let displayEl = document.querySelector('.display');

for (let i in numButtons){
    numButtons[i].addEventListener("click", numCheck)
}

//add event listener to operators
let operators = Array.from(document.getElementsByClassName('operator'));
operators.forEach(element => element.addEventListener('click', currentOp))

//add event listenter to equals
let equals = document.querySelector('#equals');
equals.addEventListener('click', isReadyForOp);

//add event listenter to clear
let clearout = document.querySelector('#clear');
clearout.addEventListener('click', () => {
    currentNumOne = '';
    currentNumTwo = '';
    currentOperator = '';
    numDisplay('');
})

function currentOp(e) {
    if (currentOperator.length == 1 && currentNumTwo.length >= 1) {
        isReadyForOp();
        currentNumOne = currentVal;
        currentNumTwo ='';
        currentOperator = e.target.textContent;
    }
    currentOperator = e.target.textContent;
}

function numCheck(e){
    if (currentOperator === '' && currentNumTwo === '') {
        currentNumOne += e.target.textContent;
        numDisplay(currentNumOne);
    }
    else if (currentOperator.length == 1 ) {
        currentNumTwo += e.target.textContent;
        numDisplay(currentNumTwo);
    }
}

function isReadyForOp() {

    if (currentNumTwo.length >= 1) {
        switch (currentOperator) {
            case '+':
                numDisplay(operate('+', Number(currentNumOne), Number(currentNumTwo)))
                break;
            case '-':
                numDisplay(operate('-', currentNumOne, currentNumTwo))
                break;
            case 'X':
                numDisplay(operate('*', currentNumOne, currentNumTwo))
                break;
            
            case '/':
                if (currentNumTwo == 0) {
                    zeroDivsor();
                }
                else {
                numDisplay(operate('/',currentNumOne, currentNumTwo))
                }
                break;
        }

    }

}

let countDecimals = function (value) { 
    if ((value % 1) != 0) 
        return value.toString().split(".")[1].length;  
    return 0;
};

function zeroDivsor() {
    let displayEl = document.querySelector('.display');
    displayEl.textContent = 'Can\'t divide by 0';
    currentNumTwo = '';
}