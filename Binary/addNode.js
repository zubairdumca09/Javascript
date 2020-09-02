let { BinaryTree } = require('./BinaryTree');
let { BinaryNode } = require('./BinaryNode');

BinaryTree.prototype.addNode = function(data){
    let tempNode = new BinaryNode(data);
    this.root = addNode(this.root, tempNode)
}
let addNode = (root, tempNode)=>{
    if(!root){
        root = tempNode;
    }else if(tempNode.data < root.data){
        root.left = addNode(root.left, tempNode)
    }else{
        root.right = addNode(root.right, tempNode)
    }
    return root;
}

//test code
let bt = new BinaryTree();
bt.addNode(14);
bt.addNode(12);
bt.addNode(90);
bt.addNode(70);
bt.addNode(100);
bt.addNode(60);
bt.addNode(10);
bt.addNode(11);
bt.addNode(8);
bt.addNode(1);
bt.addNode(9);
bt.addNode(80);
bt.addNode(75);
bt.addNode(85);

exports.bt = bt;
exports.BinaryTree = BinaryTree