Function.prototype.bindPolyfill = function(context){
    let self = this;
    return function(args){
      self.call(context, args);
    }
  }
  
  function bindCheck(param){
    console.log(this.a, param)
  }
  
  let obj = {
      a: 2,
      fun: function(x){
          console.log(this.a,x)
      }
  }
  
  
  let context1 = obj.fun.bindPolyfill({a:12})
  context1(1) 
  let context2 = bindCheck.bindPolyfill({a: 1})
  context2(11)
  
  
  
  