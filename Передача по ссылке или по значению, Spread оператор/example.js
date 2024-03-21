'use sctrict';
// 1 -------------------------------------------------------------------
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },

    // Третья задача
    showAgeAndLangs: function(plan) {
        const { languages } = plan.skills
        const { age } = plan
        console.log(`Мне ${age} и я владею языками: ${languages.join(' ').toUpperCase()}`)
    }
};
personalPlanPeter.showAgeAndLangs(personalPlanPeter)

// Первая задача
function showExperience(plan) {
    const { exp } = plan.skills;
    console.log(exp)
}
showExperience(personalPlanPeter)

// Вторая задача
function showProgrammingLangs(plan) {
    let str = '' //  Если ни один не указан, то возвращается пустая строка.
    const { programmingLangs } = plan.skills;

    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }
    console.log(str)
        // return str
}
showProgrammingLangs(personalPlanPeter)

// 2 --------------------------------------------------------------------
// Первая задача
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let newArr = [...arr]
    if (newArr.length === 0) { // Если массив пустой
        return 'Семья пуста'
    } else {
        console.log(`Семья состоит из: ${newArr.join(' ')}`)
    }
}
showFamily(family)

// Вторая задача
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for (let i in arr) {
        console.log(`${arr[i].toLowerCase()}`)
    }
}

standardizeStrings(favoriteCities)

// 3 --------------------------------------------------------------------
// Первая задача
const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) === 'string') {
        let strSpl = str.split('') // разделяет элементы
        let strRev = strSpl.reverse() // обращает порядок следования элементов массива
        let strJoin = strRev.join('') // объединяет элементы
        console.log(strJoin)
        return strJoin
    } else {
        console.log("Ошибка!")
        return "Ошибка!"
    }
}
reverse(someString)

// Вторая задача
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    // let valCurr = ''
    // arr.length === 0 ? valCurr = 'Нет доступных валют' : valCurr = 'Доступные валюты:\n'; 
    let valCurr = 'Доступные валюты:\n'
    if (arr.length === 0) {
        valCurr = 'Нет доступных валют'
        return valCurr
    } else {
        arr.forEach(function(curr, i) {
            if (curr !== missingCurr) {
                valCurr += `${curr}\n`
            }
        })
        return valCurr
    }
}
availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')