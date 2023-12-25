'use sctrict';

function sayHello(name) {
    // return `Привет, $(name)!`
    console.log(`Привет, ${name}!`)
}
sayHello('Антон');
// ------------------------------------------
function returnNeighboringNumbers(summ) {
    console.log([summ - 1, summ, summ + 1]);
}
returnNeighboringNumbers(5);
// ------------------------------------------
function getMathResult(a, b) {
    if (typeof b != 'number' || b <= 0) {
        console.log(a)
        return a
    }
    let result = '';
    for (let i = 1; i <= b; i++) {
        if (i === b) {
            result += `${a * i}`
        } else {
            result = result + a * i + '---'
        }
    }
    console.log(result)
    return result
}
getMathResult(10, 6)