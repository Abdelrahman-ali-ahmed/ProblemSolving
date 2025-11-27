/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//problem:https://leetcode.com/problems/maximum-subarray-sum-with-length-divisible-by-k/?envType=daily-question&envId=2025-11-27
var maxSubarraySum = function(nums, k) {
 const n = nums.length;
    const prefix = new Array(n + 1).fill(0);

    // Build prefix sum
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    // Track minimum prefix for each remainder class
    const minPrefix = new Array(k).fill(Infinity);
    minPrefix[0] = 0;  // prefix[0] has remainder 0

    let maxSum = -Infinity;

    for (let r = 1; r <= n; r++) {
        const rem = r % k;

        // Best subarray ending at r
        maxSum = Math.max(maxSum, prefix[r] - minPrefix[rem]);

        // Update minimum prefix for this remainder class
        minPrefix[rem] = Math.min(minPrefix[rem], prefix[r]);
    }

    return maxSum;
};


var maxSubarraySum2 = function(nums, k) {
 const n = nums.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }
console.log(prefix);

  let maxSum = -Infinity;
  for (let length = k; length <= n; length += k) {
    for (let i = 0; i + length <= n; i++) {
      const sum = prefix[i + length] - prefix[i];
      if (sum > maxSum) maxSum = sum;
    }
  }

  return maxSum;
};



var maxSubarraySum3 = function(nums, k) {
 let arr=[];
  let length=k;
  while(length<=nums.length){
    for(let i=0;i<nums.length;i++){
        arr.push(nums.slice(i,i+length).reduce((a,b)=>a+b,0));
        if(i+length===nums.length){
            break;
        }
    }
    length+=k;
  }
 return(Math.max(...arr));
};


