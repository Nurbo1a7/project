function factorial(n) {
    if (typeof(n) !== 'number' || !Number.isInteger(n)){
        return 'Error'
    }
    if (n >= 1){
        return factorial(n-1) * n
    }else {
        return 1
    }
}

console.log(factorial(-10))