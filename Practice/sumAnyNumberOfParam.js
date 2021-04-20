//#1 - sum(4,5)(5) or sum(4,5) or sum(4,5,6) or sum(4)(5)(6)
const sum1 = (...params1) => {
    const sumReturn = (...params2) => {
        return sum(...params1, ...params2)
    }

    sumReturn.value = params1.reduce((a, b) => (a + b))
    return sumReturn;
}

const sum2 = (...params1) => {
    return (...params2) => {
        if (params2.length === 0) {
            return params1.reduce((a, b) => (a + b))
        } else {
            return sum2(...params1, ...params2)
        }
    }
}


console.log(sum1(4, 1, 3, 2)(1)());
