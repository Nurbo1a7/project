// Возведение в степень 1 вариант
// function pow(x, n){
//     let result = 1;

//     for (let i = 0; i < n; i++){
//         result *= x
//     }
//     console.log(result)
// }

// Вариант с рекурсии
// function pow (x, n){
//     if (n === 1){
//         return x
//     }else {
//         return x * pow(x, n - 1)
//     }
// }


// pow(2, 1)
// pow(2, 2)
// pow(2, 3)
// pow(2, 4)

// ======================================================

let student = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],

        // при измение структуры вариант с итерации не работает
        // semi: {
        //     student:[{
        //         name: 'Aleks',
        //         progress: 100
        //     }]
        // }
    }
}

// Решение с помощю итерации
function getTotalProgressByIteration(data) {
    let total = 0;
    let student = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)){
            student += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        }else {
            for (let subCourse of Object.values(course)) {
                student += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }
    return total / student;
}
console.log(getTotalProgressByIteration(student));



// Решение с рекурсии
function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)){
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    }else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

const result = getTotalProgressByRecursion(student);
console.log(result[0]/result[1])