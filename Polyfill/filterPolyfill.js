let arr = [1,2,3,4,5,6,7,8,9];

Array.prototype.filterPolyfill = function(callback){
    let newArray = []
    for(let i = 0 ; i < arr.length ; i++){
        if(callback(this[i])){
            newArray.push(this[i]);
        }
    }
    return newArray;
}

let arr2 = arr.filterPolyfill(item => (item > 3));
console.log(arr2, arr)