let arr = [0,1,1,2,0,1,2,0,0,2,1,2,0]


function partition(arr, p, r, pivot){
    let i = p-1;
    for(let j = p ; j < r ; j++){
        if(arr[j] <= pivot){
            i = i + 1;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp; 
        }
    }
    let temp = arr[r];
    arr[r] = arr[i+1];
    arr[i+1] = temp
}

partition(arr, 0, 12, 0)
partition(arr, 4,12, 1)
console.log(arr);