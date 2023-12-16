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
// Условия -------
const num = 50;

if (num < 49) {
	console.log('Error');
}else if (num > 100) {
	console.log('Много');
}else {
	console.log('OK!');
}
// Тернарный оператор ------
(num === 50) ? console.log('OK!') : console.log('Error');

// Switch case break- строгое проверка----------

const num = 50;

switch (num) {
    case 49:
        console.log('Неверно')
        break;
    case 100:
        console.log('Неверно')
        break;
    case 50:
        console.log('В точку!')
        break;
    default:
        console.log('Не в этот раз')
}