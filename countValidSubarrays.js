var countSubarrays = function(nums, k) {
    let n = nums.length;
 let count = 0;
 let start = 0;
 let sum = 0;

 for (let end = 0; end < n; end++) {
   sum += nums[end];
   while (start <= end && sum * (end - start + 1) >= k) {
     sum -= nums[start];
     start++;
   }
   count += (end - start + 1);
 }

 return count;
};