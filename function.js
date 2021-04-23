//Operator functions


function add(num1, num2){
    return num1+num2;}

function subtract(num1,num2) {
    return Math.abs(num1-num2);}

function multiply(num1, num2) {
    console.log(num1);
    console.log(num2);
    return num1*num2;}

function divide(dividend, divisor){
    return dividend/divisor;}

function operate(opr, num1, num2) {
    switch (opr) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1,num2);
            break;
        case '*':
            return multiply(num1,num2);
            break;
        
        case '/':
            return divide(num1,num2);
            break;
    }
}
var currentNumOne ='';
var currentOperator = '';
var currentNumTwo='';


function numDisplay(numD) {
    var displayEl= document.querySelector('.display');
    displayEl.textContent=numD;
}

//add event listener to numbers
var numButtons = Array.from(document.getElementsByClassName('number'));
var displayEl= document.querySelector('.display');

for (var i in numButtons){
    numButtons[i].addEventListener("click",numCheck)
}

//add event listener to operators
var operators = Array.from(document.getElementsByClassName('operator'));
operators.forEach(element => element.addEventListener('click',currentOp))

//add event listenter to equals
var equals = document.querySelector('#equals');
equals.addEventListener('click',isReadyForOp);

function currentOp(e) {
    currentOperator = e.target.textContent;
    console.log(currentOperator);
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

function isReadyForOp(e) {

    if (currentNumTwo.length >=1) {
        switch (currentOperator) {
            case '+':
                (operate('+',currentNumOne, currentNumOne))
                break;
            case '-':
                subtract(num1,num2);
                break;
            case 'X':
                numDisplay(operate('*',currentNumOne, currentNumTwo))
                break;
            
            case '/':
                divide(num1,num2);
                break;
        }

    }

}