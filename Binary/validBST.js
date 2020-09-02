let { BinaryTree, bt } = require('./inorder');
//to validate change BT in inOrderArray and then check if it is sorted array
BinaryTree.prototype.isValidBST = function(array){
    for(let i = 0 ; i < array.length-1 ; i++){
        if(array[i] > array[i+1] )
            return false
    }
    return true
}

console.log(bt.isValidBST(bt.inOrder()));