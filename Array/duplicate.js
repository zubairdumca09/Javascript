let arr = [1,2,3,4,4,5]

let arr1 = [];

for(let i = 0 ; i < arr.length ; i++){
    if(arr1[arr[i]] === 1){
        console.log(arr[i])
        break;
    }
    arr1[arr[i]] = 1;
}