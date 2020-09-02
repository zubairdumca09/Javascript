let { BinaryTree } = require('./BinaryTree');
let { bt } = require('./addNode');
BinaryTree.prototype.length = function(){
    return length(this.root)
}
let length = (root)=>{
   if(!root) return 0;
   let l = length(root.left);
   let r = length(root.right);
   return (l > r) ? (l+1) : (r+1);
}


//test code
bt.addNode(5);
bt.addNode(6);


bt.addNode(7);
