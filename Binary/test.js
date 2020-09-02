let n = 4
function name(...args){
    if(args.length !== 1){
        return args.reduce((a,b)=>(a+b));
    }else{
        return function(n){
            return args[0]+name(n)
        };
    }
}

console.log(name(1,3,4,6))
console.log(name(1)(2)(3)(4))