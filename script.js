const userInputText = document.querySelector('#bottom-num'); //place where actual user input will be displayed
const userInputTextAll = document.querySelector('#top-num'); //place where all of user inputs will be displayed

let sign, value1, value2;

let allDigits = Array.from(document.querySelectorAll('.num'));
let allSigns = Array.from(document.querySelectorAll('.sign'));
let equalSign = document.querySelector('.equal');
equalSign.addEventListener('click', evaluateEquation);

document.querySelector('#clear').addEventListener('click', clearAll);

function clearAll(){
    userInputText.textContent = '';
    userInputTextAll.textContent = '';
    sign = '';
    value1 = 0;
    value2 = 0;
    alert('Everything clear!');
}

document.querySelector('#delete').addEventListener('click', e => {
    let str = userInputText.textContent;
    str = str.substring(0, str.length - 1);
    userInputText.textContent = str;
});

for(let i = 0; i < allDigits.length; i++){
    allDigits[i].addEventListener('click', changeUserInput);
};

for(let i = 0; i < allSigns.length; i++){
    allSigns[i].addEventListener('click', evaluateSign);
};

function changeUserInput(e){
    userInputText.textContent += e.target.textContent;
    value2 = parseFloat(userInputText.textContent);
};

function evaluateSign(e){ //displays number and sign in userInputTextAll and clears userInputText
    if(userInputTextAll.textContent !== '' && userInputText.textContent !== ''){
        evaluateEquation(sign, value1, value2);
    }
    sign = e.target.textContent;
    value1 = parseFloat(userInputText.textContent);
    userInputTextAll.textContent = value1 + ' ' + sign;
    userInputText.textContent = '';
};


function evaluateEquation(e){
    userInputText.textContent = operate(sign, value1, value2);
    userInputTextAll.textContent = '';
};

function add(a,b){
    return a + b;
};

function substract(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b === 0){
        alert('You can\'t devide by 0!');
        clearAll();
        return;
    }
    return a / b;
}

function operate(operator, a, b){
    switch(operator){
        case '+':
            return add(a, b);
        case '-':
            return substract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            console.log('No such operator');
    }
    return;
};

