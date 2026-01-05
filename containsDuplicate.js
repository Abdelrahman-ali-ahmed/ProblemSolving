/**
 * @param {number[]} nums
 * @return {boolean}
 */
// problem: https://leetcode.com/problems/contains-duplicate/
var containsDuplicate = function(nums) {
    let len1=nums.length
let len2=[...new Set(nums)].length
return !(len1===len2)
};