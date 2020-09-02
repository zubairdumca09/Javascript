let { BinaryTree } = require('./addNodeGeneral');
let { BinaryNode } = require('./BinaryNode');

BinaryTree.prototype.buildTree = function(preorder,inorder){
    // if(!preorder || !inorder || (preorder.length === 0) || (inorder.length === 0)){
    //     return []
    // }
     //let root = new BinaryNode();
    // return buildTree(preorder,inorder, root);
    let preStart = 0;
    let preEnd = preorder.length-1;
    let inStart = 0;
    let inEnd = inorder.length-1;
    return buildTreeWithoutMutate(preorder, preStart, preEnd, inorder, inStart,inEnd);
}
//Leet code not working on this
buildTree = (preorder=[], inorder=[], root)=>{
    if(preorder.length === 0 || inorder.length === 0){
        return root;
    }
    let nodeData = preorder.shift();
    root = new BinaryNode(nodeData);
    let nodeIndex = inorder.indexOf(nodeData);
    let leftInorder = inorder.slice(0,nodeIndex);
    let rightInorder = inorder.slice(nodeIndex+1, inorder.length);
    let leftPreorder = preorder.splice(0,leftInorder.length);
    let rightPreorder = preorder;
    root.left = buildTree(leftPreorder, leftInorder, root.left)
    root.right = buildTree(rightPreorder, rightInorder, root.right)
    return root;
}
//Leet code working on this
buildTreeWithoutMutate = (preorder=[], preStart, preEnd, inorder=[], inStart, inEnd)=>{
    if(preStart > preEnd || inStart > inEnd){
        return null;
    }
    let nodeData = preorder[preStart];
    let root = new BinaryNode(nodeData);
    let nodeIndex = inorder.indexOf(nodeData);
    root.left = buildTreeWithoutMutate(preorder, preStart+1, preStart+(nodeIndex - inStart),inorder, inStart, nodeIndex-1)
    root.right = buildTreeWithoutMutate(preorder, preStart+(nodeIndex-inStart)+1, preEnd, inorder, nodeIndex+1 , inEnd)
    return root;
}
let preorder = [1, 2, 4, 5, 3, 7, 6, 8]
let inorder = [4, 2, 5, 1, 6, 7, 3, 8]
let bt = new BinaryTree();
console.log(bt.buildTree(preorder,inorder))

