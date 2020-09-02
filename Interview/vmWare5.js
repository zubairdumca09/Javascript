let obj = {
    a: 10,
    b: {
      a: function(){
        console.log(x);
      }
    },
    c: [1,2,3,4, {a:1, b:2}],
    d: [{a:1},{a:2}],
    e: {
      a: [1,2],
      b: {
        a: 10, b: 20
      }
    },
    f: {
      a: null, b: false, c: [], d: {}
    }
  }
  function deepCopy(obj, copy){
    if(!obj){
      return obj;
    }
    if(typeof obj === 'object'){
      if(Array.isArray(obj)){
        if(obj.length === 0) return obj
        else{
          for(let i = 0 ; i < obj.length ; i++){
            if(obj[i] === obj[i]) copy[i] = obj[i];
            else copy[i] = deepCopy(obj[i], copy[i]);
          }
        }
      }else if(obj instanceof Date) return obj
      else{
        if(Object.keys(obj).length === 0) return obj
        else{
          for(var key in obj){
            if(obj[key] === obj[key]) copy[key] = obj[key];
            else copy[key] = deepCopy(obj[key], copy[key]);
          }
        }
      }
    }
  }
  let copy = []
  deepCopy(obj, copy)
  
  console.log(copy)