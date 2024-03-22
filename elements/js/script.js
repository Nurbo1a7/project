'use strict';
// получает элемент по Id
const box = document.getElementById('box');
console.log(box);

// получаем псевдомассивы 
const btns = document.getElementsByTagName('button');
console.log(btns[0]);

// если ищем определенный класс не нужно ставить точку перед названием
const circles = document.getElementsByClassName('circle');
console.log(circles);

// обязательно ставим точку при поиска класса | ставим решетку # при поиске определенный идентификатор
const hearts = document.querySelectorAll('.heart');
hearts.forEach(item =>{
	console.log(item);
});

// получает первый элемент который попался по этот селектор
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);