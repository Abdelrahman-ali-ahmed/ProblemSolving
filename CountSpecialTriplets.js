/**
 * @param {number[]} nums
 * @return {number}
 */
// problem :https://leetcode.com/problems/count-special-triplets/description/
var specialTriplets = function(nums) {
const MOD = 1_000_000_007;

    let freqLeft = new Map();   // counts for i < j
    let freqRight = new Map();  // counts for k > j

    // Fill freqRight with full frequencies
    for (let x of nums) {
        freqRight.set(x, (freqRight.get(x) || 0) + 1);
    }

    let ans = 0;

    for (let j = 0; j < nums.length; j++) {
        // Remove current j from right side
        freqRight.set(nums[j], freqRight.get(nums[j]) - 1);

        let need = nums[j] * 2;
    
        let leftCount = freqLeft.get(need) || 0;
        let rightCount = freqRight.get(need) || 0;

        ans = (ans + leftCount * rightCount) % MOD;

        // Add nums[j] to left side
        freqLeft.set(nums[j], (freqLeft.get(nums[j]) || 0) + 1);
    }

    return ans;

};