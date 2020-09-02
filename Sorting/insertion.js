let arr = [2,5,6,1,9,0, -2]

for(let i = 2 ; i < arr.length ; i++){
    let key = arr[i];
    let j = i - 1
    while(j >= 0 && arr[j] > key){
        arr[j+1] = arr[j]
        j = j - 1;
    }
    arr[j+1] = key;
}
console.log(arr);