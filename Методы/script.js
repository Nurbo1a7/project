'use sctrict';

const str = 'test';

console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str);

const fruit = 'Some fruit';
console.log(fruit.indexOf('f'));

const logg = 'Hello world';
console.log(logg.slice(6, 11));
console.log(logg.substring(4, 11));
console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));

// --------------------------
// Создайте функцию, которая будет вычислять объем и 
// площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). 
// Эта функция принимает в себя целое число со значением длины ребра куба.

function calculateVolumeAndArea(cube) {
    if (cube != 'number' && !Number.isInteger(cube) || cube < 0) {
        console.log('При вычислении произошла ошибка');
    } else {
        console.log(`Объем куба: ${Math.pow(cube, 3)}, площадь всей поверхности: ${6*(cube * cube)}`);
    }
}
calculateVolumeAndArea(-15)
    // ----------------------------------------

function getCoupeNumber(train) {
    if (typeof(train) !== 'number' || train < 0 || !Number.isInteger(train)) {
        console.log('Ошибка. Проверьте правильность введенного номера места')
        return 'Ошибка. Проверьте правильность введенного номера места';
    }
    if (train === 0 || train > 36) {
        console.log('Таких мест в вагоне не существует')
        return 'Таких мест в вагоне не существует';
    }
    console.log(Math.ceil(train / 4))
    return Math.ceil(train / 4);
}
getCoupeNumber(11)
    // ---------------------------------

// Место для первой задачи
function getTimeFromMinutes(mins) {
    // Если вместо аргумента приходит не число, дробное или отрицательное число
    if (typeof(mins) !== 'number' || mins < 0 || !Number.isInteger(mins)) {
        console.log("Ошибка, проверьте данные")
        return "Ошибка, проверьте данные";
    }
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    if (hours == 0) {
        console.log(`Это ${hours} часов и ${minutes} минут`)
        return `Это ${hours} часов и ${minutes} минут`;
    } else if (hours == 1) {
        console.log(`Это ${hours} час и ${minutes} минут`)
        return `Это ${hours} час и ${minutes} минут`;
    } else {
        console.log(`Это ${hours} часа и ${minutes} минут`)
        return `Это ${hours} часа и ${minutes} минут`;
    }
}
getTimeFromMinutes(180);
// алтернативный вариант первый задачи
function alternativ(mins) {
    if (typeof(mins) !== 'number' || mins < 0 || !Number.isInteger(mins)) {
        return "Ошибка, проверьте данные";
    }
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;

    let = hoursStr = ''

    switch (hours) {
        case 0:
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов'
    }
    console.log(`Это ${hours} ${hoursStr} и ${minutes} минут`)
    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}
alternativ(180)
    // ------------------------------------
    // Место для второй задачи
function findMaxNumber(a, b, c, d) {
    if (typeof(a, b, c, d) != 'number') {
        console.log(0)
        return 0
    }
    console.log(Math.max(a, b, c, d))
    return Math.max(a, b, c, d)
}
findMaxNumber(1, 5, '6', '10')

first: for (let i = 0; i <= 7; i++) {
    console.log(`Первый уровень: ${i}`); // ← console.log(`First level: ${i}`);
    for (let j = 0; j < i; j++) {
        console.log(`Второй уровень: ${j}`); // ← console.log(`Second level: ${j}`);
        for (let k = 0; k < j; k++) {
            // if (k === 2) continue first; // ← break first;
            console.log(`Третий уровень: ${k}`); // ← console.log(`Third level: ${k}`);
        }
    }
}

// Задача с собеседований на числа Фибоначчи
function fib(n) {
    if (typeof(n) !== 'number' || n < 0 || !Number.isInteger(n)) {
        return ''
    }
    let result = '',
        a = 0,
        b = 1;
    for (let i = 0; i < n; i++) {
        if (i + 1 === n) {
            result += `${a}`;
            // Без пробела в конце
        } else {
            result += `${a} `;
        }
        let c = a + b;
        a = b;
        b = c;
    }

    console.log(result)
    return result;
}
fib(7)