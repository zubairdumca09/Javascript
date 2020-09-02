let { BinaryTree } = require('./addNodeGeneral');
let { BinaryNode } = require('./BinaryNode');

BinaryTree.prototype.buildTree = function(postorder,inorder){
    if(!postorder || !inorder || (postorder.length === 0) || (inorder.length === 0)){
        return []
    }
    let root = new BinaryNode();
    return buildTree(postorder,inorder, root);
}


buildTree = (postorder=[], inorder=[], root)=>{
    if(postorder.length === 0 || inorder.length === 0){
        return root;
    }
    let nodeData = postorder.splice(postorder.length-1,1);  
    nodeData = nodeData[0];
    console.log(nodeData)
    root = new BinaryNode(nodeData)
    let nodeIndex = inorder.indexOf(nodeData);
    if(nodeIndex < 0) return root;
    root.left = buildTree(postorder,inorder.slice(0,nodeIndex),root.left)
    root.right = buildTree(postorder,inorder.slice(nodeIndex+1,inorder.length),root.right)
    return root;
}
BinaryTree.prototype.buildTreeWithoutMutate = function(postorder,inorder){
    let postStart = 0;
    let postEnd = postorder.length-1;
    let inStart = 0;
    let inEnd = inorder.length-1
    return buildTreeWithoutMutate(postorder,postStart, postEnd, inorder, inStart, inEnd);
}

buildTreeWithoutMutate = (postorder=[], postStart, postEnd, inorder=[], inStart, inEnd)=>{
    if(postEnd < 0 || inStart > inEnd){
        return null;
    }
    let nodeData = postorder[postEnd];  
    let nodeIndex = inorder.indexOf(nodeData);
    let root = new BinaryNode(nodeData);
    root.left = buildTreeWithoutMutate(postorder, postStart, postStart + (nodeIndex - inStart) - 1 , inorder, inStart, nodeIndex-1)
    root.right = buildTreeWithoutMutate(postorder, postStart + (nodeIndex - inStart), postEnd-1, inorder, nodeIndex + 1, inEnd)
    return root;
}
let bt = new BinaryTree();
console.log(bt.buildTreeWithoutMutate([8, 4, 5, 2, 6, 7, 3, 1],[4, 8, 2, 5, 1, 6, 3, 7]))

