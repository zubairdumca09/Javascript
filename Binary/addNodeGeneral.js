let { BinaryNode } = require('./BinaryNode');
let { BinaryTree } = require('./BinaryTree');

BinaryTree.prototype.addNode = function(data){
    this.root =  addNode(this.root,data)
}
addNode = (root, data)=>{
    if(!root) {
       let node = new BinaryNode(data);
       root = node; 
       return root; 
    }
    if(!root.left){
        root.left = addNode(root.left,data)
    }else{
        root.right = addNode(root.right,data)
    }
    return root;
}

let bt = new BinaryTree(); 
bt.addNode(10);
bt.addNode(11);
bt.addNode(12);
bt.addNode(13);

exports.BinaryTree = BinaryTree;