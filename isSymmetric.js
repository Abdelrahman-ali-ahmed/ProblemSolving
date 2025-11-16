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
 * @return {boolean}
 */
var isSymmetric = function(root) {
if (root.left===null && root.right===null) return true;
let left=null
let right=null
if(root.left !==null ) {left=root.left;}
if(root.right !==null ) {right=root.right;}
var isSameTree = function(p, q) {
if (p == null && q == null) return true;
if (p == null || q == null) return false;
if (p.val !== q.val) return false;
  return isSameTree(p.left,q.right) && isSameTree(p.right,q.left)
};

return left !== null && right!== null?  isSameTree(left,right) :false
};