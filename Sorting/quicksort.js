let arr = [2,5,6,1,9,0, -2];

function quicksort(arr, p, r){
    if(p < r){
        let q = partition(arr, p, r)
        quicksort(arr, p, q-1);
        quicksort(arr, q+1, r);
    }
}

function partition(arr, p, r){
    let x = arr[r];
    let i = p - 1;
    for(let j = p; j < r ; j++){
        if(arr[j] <= x){
            i = i+1;
            let temp = arr[i] 
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    let temp = arr[i+1];
    arr[i+1] = arr[r];
    arr[r] = temp;
    return i+1;
}

quicksort(arr, 0, 6);
console.log(arr);