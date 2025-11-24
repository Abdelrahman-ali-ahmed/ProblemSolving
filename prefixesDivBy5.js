/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
// problem:https://leetcode.com/problems/binary-prefix-divisible-by-5/?envType=daily-question&envId=2025-11-24
var prefixesDivBy5 = function(nums) {
let decimal = 0;
let arr = [];
for (let i = 0; i < nums.length; i++) {
    decimal = (decimal * 2 + nums[i]) % 5;  // take modulo 5 each step
    arr.push(decimal === 0);
}
return arr;
};