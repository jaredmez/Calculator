//Operator functions

function add(num1, num2){
    return num1+num2;}

function subtract(num1,num2) {
    return Math.abs(num1-num2);}

function multiply(num1, num2) {
    return num1*num2;}

function divide(dividend, divisor){
    return dividend/divisor;}

function operate(opr, num1, num2) {
    switch (opr) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1,num2);
            break;
        case '*':
            multiply(num1,num2);
            break;
        
        case '/':
            divide(num1,num2);
            break;
    }
}