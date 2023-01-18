const screen = document.querySelector('.screen');

let display = '';
let firstOperand = 0;
let lastOperator = '';

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, n1, n2) {

    let result = 0;
    n1 = +n1;
    n2 = +n2;

    switch (operator) {
        case '+':
            result = add(n1, n2);
            break;

        case '-':
            result = substract(n1, n2);
            break;

        case 'x':
            result = multiply(n1, n2);
            break;

        case '/':
            result = divide(n1, n2);
            result = Math.round(result * 10) / 10
            break;
    
        default:
            break;
    }

    return result;
}


function linkButtons() {
    let buttons = document.querySelectorAll('.buttonNumber');

    buttons.forEach(b => {
        b.addEventListener('click', displayValue);
    });

    // TODO : Link to function that handles the calculation process
    document.querySelector('.buttonPlus').addEventListener('click', storeOperation);
    document.querySelector('.buttonMinus').addEventListener('click', storeOperation);
    document.querySelector('.buttonMult').addEventListener('click', storeOperation);
    document.querySelector('.buttonDiv').addEventListener('click', storeOperation);

    document.querySelector('.buttonReset').addEventListener('click', reset);

    document.querySelector('.buttonEqu').addEventListener('click', calculate);
}

function displayValue(e) {

    if(screen.textContent == '0'){
        screen.textContent = '';
    }

    display += e.target.textContent;
    screen.textContent = display;
}

function storeOperation(e){

    if(lastOperator){
        calculate();
    }

    firstOperand = display;
    lastOperator = e.target.textContent;

    display = '';
}

function calculate() {

    if(lastOperator == '/' && display == '0'){
        reset();

        screen.textContent = 'CANNOT DIVIDE BY 0 : ABORTING';
        return;
    }
    display = operate(lastOperator, firstOperand, display);
    screen.textContent = display;
    lastOperator = '';
}

function reset() {
    screen.textContent = '0';
    display = '';
    lastOperator = '';
    firstOperand = 0;
}

linkButtons();