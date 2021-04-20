Array.prototype.reducePolyfill = function (fun, initial) {
    if (this.length) {
        const len = this.length;
        let ac = initial ? initial : this[0]
        for (let i = (initial ? 0 : 1); i < len; i++) {
            ac = fun(ac, this[i])
        }
        return ac;
    }
}


function f1(ac, cur) {
    return ac + cur
}

var sum = [1, 2, 3].reducePolyfill(f1, 10)
console.log(sum)

