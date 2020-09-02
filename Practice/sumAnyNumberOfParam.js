//#1 - sum(4)(5) or sum(4,5) or sum(4,5,6) or sum(4)(5)(6)
const sum = (...params1) => {
    const sumReturn = (...params2) => {
        return sum(...params1, ...params2)
    }
    
    sumReturn.value = params1.reduce((a,b) => (a+b))
    return sumReturn;
}
console.log(sum(4,1,3,2)(5,6,1,1,1)(1).value);
