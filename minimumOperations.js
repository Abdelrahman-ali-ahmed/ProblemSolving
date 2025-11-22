/**
 * @param {number[]} nums
 * problem:https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three?envType=daily-question&envId=2025-11-22
 * @return {number}
 */
var minimumOperations = function(nums) {
    return nums.filter((x)=> x%3!==0).length
};