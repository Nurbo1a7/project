'use strict';
let num = 20;
// Function Declaration - создается до начала выполнения скрипта, можно вызвать перед объявленим --- 
function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num)
}
showFirstMessage('Hello wold!');
console.log(num);
// ----------------------------
function calc(a, b) {
    return (a + b);
}
console.log(calc(3, 4));
console.log(calc(4, 5));
console.log(calc(5, 6));
// ----------------------------
function ret() {
    let num = 50;

    return num;
}
const anotherNum = ret();
console.log(anotherNum);
// Function Expression - создается только тогда, когда доходит поток кода, можно вызвать только после объявления --- 
const logger = function() {
    console.log('Hello')
};
logger();
// Стрелочные функции - не имеет своего контекста (this) ---
const calc = (a, b) => {
    console.log('Hello');
    return a + b
};
console.log(calc(5, 6));
// -----------------------------
const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount)
}

// promotion(convert(500, usdCurr)); - первый вариант  
const res = convert(500, usdCurr); // - второй вариант
promotion(res);