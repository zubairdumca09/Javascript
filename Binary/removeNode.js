let { bt } = require('./addNode')
let { BinaryTree } = require('./BinaryTree');

BinaryTree.prototype.removeNode = function(data){
    this.root = removeNode(this.root, data);
}
let findMin = (root)=>{
    if(!root.left) return root;
    return findMin(root.left);
}   
let removeNode = (root, data)=>{
    if(!root){
        return root;
    }
    if(root.data === data){
        console.log("---------------")
        if(!root.left && !root.right) root = null;
        else if(!root.left && root.right) root = root.right;
        else if(root.left && !root.right) root = root.left; 
        else{
            let node = findMin(root.right);
            console.log(root.data);
            root.data = node.data;
            console.log(root.data);
            root.right = removeNode(root.right, node.data);
        }
    }else{
        root.left = removeNode(root.left,data)
        root.right = removeNode(root.right,data)
    }
    return root;
    
}

//test 
bt.removeNode(14)
console.log(bt)
