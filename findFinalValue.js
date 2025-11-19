/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
if (!nums.includes(original)) return original;
let mult=original*2
while(nums.includes(mult)){mult=mult*2}
return(mult);
};