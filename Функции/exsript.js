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
    let result = ''
    if (typeof b != 'number' || b <= 0) {
        // return a
        console.log(a)
    } else {
        for (let i = 1; i <= b; i++) {
            result += (` -- ${a * i}`)
        }
    }
    // return result
    console.log(result)
}
getMathResult(3, 4)