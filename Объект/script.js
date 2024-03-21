'use sctrict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() { //--------- метод объекта
        console.log('Test')
    }
};
// options.makeTest()
// console.log(Object.keys(options).length)

const { border, bg } = options.colors; //-------- деструктуризация объектов
console.log(border)

// console.log(options['colors']['border'])

// console.log(options.name)

// delete options.name

// console.log(options)
let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`)
        counter++
    }
}