'use sctrict';

const shoppingMallData = {
    shops: [{
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let squareArea = 0;
    let fullSize = 0;
    for (let key of data.shops) {
        squareArea += key.width * key.length
        console.log(squareArea)
            // return squareArea
    }
    fullSize = data.height * squareArea
    if (fullSize * data.moneyPer1m3 > data.budget) {
        console.log('Бюджета недостаточно')
            // return 'Бюджета недостаточно'
    } else {
        console.log('Бюджета достаточно')
            // return 'Бюджета достаточно'
    }
}
isBudgetEnough(shoppingMallData)

// ---------------------------------------------------------------------------

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    // arr.sort()
    const array_size = 3;
    const sliced_array = [];
    for (let i = 0; i < arr.length; i++) {
        sliced_array.push(arr.slice(i, i + array_size));
    }
    console.log(sliced_array);
}
sortStudentsByGroups(students)


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const array_size = 3;

const sliced_array = [];

for (let i = 0; i < array.length; i += array_size) {
    sliced_array.push(array.slice(i, i + array_size));
}

console.log(sliced_array);