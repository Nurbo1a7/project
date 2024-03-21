'use sctrict';

let a = 5,
    b = a; // --- скопировали 

b = b + 5;

console.log(b)
console.log(a)

// ----------------------------------------------------------------
const obj = {
    a: 5,
    b: 1
};
const copy = obj; // --- передается как ссылка 
copy.a = 10;
console.log(copy)
console.log(obj)

// ----------------------------------------------------------------

// Функция для копирование объекта. Работает только поверхностна 
function copy(mainObj) {
    let objCopy = {}

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key]
    }
    return objCopy;
}

const number = {
    a: 2,
    b: 4,
    c: {
        x: 7,
        y: 6
    }
}

const newNumbers = copy(number)
newNumbers.a = 10;
newNumbers.c.x = 8;

console.log(newNumbers);
console.log(number)

const add = {
    d: 12,
    e: 20
};

console.log(Object.assign(number, add)) // Метод для добавление в с объекта (add) на (number)

const clone = Object.assign({}, add); // Метод для клонирование в новый объект

clone.d = 20;

console.log(add);
console.log(clone)

// Создаем копию массива-------------------

const oldArray = ['a', 'b', 'd']

const newArray = oldArray.slice();
newArray[1] = 'adasdas'
console.log(newArray);
console.log(oldArray)

// Spread оператор ES9 стандарт (оператор разворота) 
const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook']; //----- Spread оператор

console.log(internet)

//----------------------------
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7]
log(...num); // ----- Spread оператор
// -----------------------------------

const array = ['a', 'b']
const newArray = [...array] // ----- Spread оператор
console.log(newArray)

// -----------------------------------
const objQQ = {
    one: 1,
    two: 2
}
const newObjQQ = {...objQQ } // ----- Spread оператор
console.log(newObjQQ)