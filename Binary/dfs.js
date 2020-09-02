let { BinaryTree, bt } = require('./addNode');

BinaryTree.prototype.dfs = function(){
    let arr2d = []
    
    dfs(this.root, 5);
} 
let dfs = (root, level)=>{
    if(!root) return;
    if(level === 1){
        console.log(root.data);
        return;
    }
    dfs(root.left, level-1)
    dfs(root.right, level-1)
    
}
bt.dfs();