'use sctrict';

let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello')
    }
};

const john = Object.create(soldier); // новый метод наследственно созданный объект
// const john = {                    // старый метод 
//     health: 100 
// };

john.__proto__ = soldier; // устаревший метод наследственно созданный объект
Object.setPrototypeOf(john, soldier) // новый метод наследственно созданный объект

// console.log(john)
john.sayHello()