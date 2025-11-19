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
 * @return {number}
 */
var minDepth = function(root) {
if(!root) return 0;

var minDep = function(node) {
if (!node) return 0;
if (node.left== null && node.right==null ) return (1)
let left=node.left? minDep(node.left):0
let right= node.right? minDep(node.right) :0
return  left!== 0&& right!==0? Math.min(left,right)+1:Math.max(left,right)+1
};
return(minDep(root));
};