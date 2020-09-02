Function.prototype.callPolyfill = function(context, args){
    context.newFun = this;
    context.newFun()
}
Function.prototype.bindPolyfill = function(context){
    let self = this;
    return function(args){
        self.call(context)
    }
}

let obj = {
  a: 2,
  fun: function(){
    console.log(this.a)
  }
}


obj.fun.callPolyfill({a:11})
// let bindMethod = obj.fun.bindPolyfill({a:11})
// bindMethod()


