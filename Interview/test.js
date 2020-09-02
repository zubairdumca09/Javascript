function callee(par){
    var c = par + 2;
    return c;
}

var callback = function(a){
    a = a * 2;
    return a;
}

var timeFunction = function(a){
    return a + 12
}
function execute(fun1, func2, x){
    var a = x + 12;
    a = fun1(a)
    a = func2(a);
    return callee(a);
}
var num = 10;
var returnVal = execute(callback, timeFunction, num)
console.log(returnVal);


