//  You have an array where one element occurs for more than n / 2, 
// you have to find the element in O(n) and space as O(1) ?

let max = 0
let arr = [3,3,5,3,3,3,2,2,3,4,5]
let count = 1
for (let i = 0 ; i < arr.length ; i++){
    if(arr[i] === max){
        count++
    }else{
        count--
    }
    if(count === 0){
        max = arr[i]
        count = 1;
    }  
}
console.log(max)
