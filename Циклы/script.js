'use strict';

let num = 50; 
while (num <= 55){
	console.log(num);
	num++;
}

// ----------------

let num = 50; 
do {
	console.log(num);
	num++;
}

while (num <= 55);

// ---------------
let num = 50; 
for (let i = 1; i < 8; i++){  //* i - итератор 
	console.log(num);
	num++;
}
// ---------------

for (let i = 1; i < 10; i++){
    if (i === 6){
        // break; //* корсетилген санга келгенде токтайт 
        continue; //* условиядагы корсетилген санды тастап дальше кетет
    }
    console.log(i)
}
// - Цикл в цикле и метки ----------

for (let i = 0; i < 3; i++){
    console.log(i)
    for (let j = 0; j < 3; j++){
        console.log(j)
    }
}
// --------------

// *
// **
// ***
// ****
// *****
// ******

let result = '';
const length = 7;

for (let i = 1; i < length; i++){

    for (let j = 0; j < i; j++){
        result += '*';
    }

    result += '\n'; // ← перенос строки
}
console.log(result)

//---------------
// Метка 
// ↓
first: for (let i = 0; i < 3; i++){ 
    console.log(`Первый уровень: ${i}`); // ← console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++){
        console.log(`Второй уровень: ${j}`); // ← console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++){
            if (k === 2) continue first; // ← break first;
            console.log(`Третий уровень: ${k}`); // ← console.log(`Third level: ${k}`);
        }
    }
}

// -------------

for (let i = 20; i >= 10; i--){
    if (i === 12){
        break;
    }
    console.log(i)
}
// Третия задача----------

for (let i = 2; i <= 10; i++){
    if (i % 2 != 0){
        continue;
    }
    else{
        console.log(i)
    }
}
// Четвертое задача -----

let i = 2;
while (i <= 15){
    i++
    if (i % 2 === 0){
        continue;
    }else{
        console.log(i)
    }
}

// Пятое задача -----
const arrayOfNumbers = [];

for (let i = 5; i <= 10; i++){
    arrayOfNumbers.push(i)
    console.log(arrayOfNumbers)
}

// ----------------

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
// result.push(arr) - можно без цикла вот так
for (let i = 0; i < arr.length; i++){
    result[i] = arr[i]
    console.log(result)
}

// ----------

function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let i = 0; i <= data.length; i++){
        if(typeof data[i] === 'number'){
            data[i] *= 2
        }else if(typeof data[i] === 'string'){
            data[i] = `${data[i]} - done`
            // data[i] += 'done'  --- можно тоже так
        }
    }
    console.log(data)
    // Не трогаем
    return data;
}

// Переписать массив наоборот на другой массив----------

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i = 1; i <= data.length; i++){
    result[i - 1] = data[data.length - i]
    console.log(result) 
}

// -----------
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const lines = 5;
let result = ''

for (let i = 0; i <= lines; i++){
    for (let j = 0; j < lines - i; j++){
        result += ' ';
    }
    for (let j = 0; j < 2 * i + 1; j++){
        result += '*';
    }
    result += '\n'
}
console.log(result)


