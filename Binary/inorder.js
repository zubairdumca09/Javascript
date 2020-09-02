let { BinaryTree } = require('./BinaryTree');
let { bt } = require('./addNode');

BinaryTree.prototype.inOrder = function(){
    let inorderArray = []
    //inOrderIterative(this.root,inorderArray);
    inOrderRecursive(this.root,inorderArray)
    return inorderArray
}
let inOrderIterative = function(root,arr){
    let current = root;
    let stck = [];
    while(current || (stck.length !== 0)){
        while(current){
            stck.push(current);
            current = current.left;
        }
        if(!current && (stck.length !== 0)){
            let printNode = stck.pop();
            arr.push(printNode.data)
            current = printNode.right;
        }
    }    
}   
let inOrderRecursive = function(root,arr){
    if(!root) return root;
    inOrderRecursive(root.left,arr)
    arr.push(root.data);
    inOrderRecursive(root.right,arr)    
}   

exports.BinaryTree = BinaryTree;
exports.bt = bt;