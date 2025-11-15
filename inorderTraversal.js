/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 
var inorderTraversal = function(root) {
 let arr=[];
  if(root===null){
  return []
}
if (root.left===null){
  arr.push(root.val)
}else{
  arr.push(inorderTraversal(root.left))
  arr.push(root.val)
}
 if(root.right!==null){
    arr.push(inorderTraversal(root.right))
  }
 return arr.flat()
};