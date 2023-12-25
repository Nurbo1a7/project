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
    if (train != 'number' && !Number.isInteger(train) && train <= 36 || train < 0) {
        console.log('Ошибка. Проверьте правильность введенного номера места')
    } else if (train === 0 || train > 36) {
        console.log('Таких мест в вагоне не существует')
    }
}