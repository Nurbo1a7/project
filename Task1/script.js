'use strict';
// Общение с пользователем -----------------------------------------------
// alert('Hello World');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = prompt('Вам есть 18 лет?', '18');
// const answer = +prompt('Вам есть 18 лет?', '18');
// console.log(typeof(answer));

const answer = [];
answer[0] = prompt('Как ваше имя?', '');
answer[1] = prompt('Как ваше фамилия?', '');
answer[2] = prompt('Сколько вам лет?', '');

document.write(answer);