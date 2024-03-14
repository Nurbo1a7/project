'use sctrict';

const arr = [1, 2, 3, 6, 8];
// arr[99] = 0;
// console.log(arr.length)
// console.log(arr)

// Значение элемента, номер элемента, ссылка 
arr.forEach(function(item, i, arr) {
    console.log(` ${i}: ${item} внутри массива ${arr}`)
});

// arr.pop() // --- удаляет последний элемент в массиве
// arr.push(10) // ---- добавляет элемент в конец массива

// console.log(arr)

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
};

for (let value of arr) { // ------ метод for of работает только с массивами 
    console.log(value)
};