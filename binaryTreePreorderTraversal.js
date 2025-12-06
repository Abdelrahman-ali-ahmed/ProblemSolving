//problem: https://leetcode.com/problems/binary-tree-preorder-traversal/description/
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
var preorderTraversal = function(root) {
     let fun=(r)=>{
 if (!r) return [];   // return an array, not undefined
  let arr = [];
  arr.push(r.val);
  let left = preorderTraversal (r.left);
  let right = preorderTraversal (r.right);
  arr.push(...left);
  arr.push(...right);
  return arr;
  }
return fun(root).filter((x)=>x!=null);
};