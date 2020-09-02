let p1 = new Promise((res, rej) => {
    setTimeout(()=>{
       res("p1 promise"); 
    },1000)
  })
  
  let p2 = new Promise((res, rej) => {
    setTimeout(()=>{
       rej("p2 promise"); 
    },1000)
  })
  
  customAll = function(...promises){
    return new Promise((res, rej) => {
      console.log(promises)
      
      let count = promises.length;
      let result = [];
      const checkDone = () => {
        if(--count === 0){
          res(result)
        }
      }
      promises.forEach((p, i) => {
        p.then((data)=>{ result[i] = data;}, rej).then(checkDone)
      })
    })
  }
  
  customAll(p1, p2).then((data)=>{
    console.log(data, "all resolved")
  }).catch((err)=>{
    console.log(err, "rejected")
  })