let { bt } = require('./addNode');
let { BinaryTree } = require('./BinaryTree');

BinaryTree.prototype.search = function(data){
    return search(this.root, data)
}
let search = (root, data)=>{
    if(!root) return false;
    if(root.data === data) return true;
    else if(data < root.data){
        return search(root.left, data);
    }else return search(root.right, data);
}


