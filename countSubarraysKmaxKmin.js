var countSubarrays = function(nums, minK, maxK) {
    let count = 0;
let minIndex = -1, maxIndex = -1, leftBound = -1;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minK || nums[i] > maxK) {
        leftBound = i;
    }
    if (nums[i] === minK) minIndex = i;
    if (nums[i] === maxK) maxIndex = i;
    count += Math.max(0, Math.min(minIndex, maxIndex) - leftBound);
}
return count;
};