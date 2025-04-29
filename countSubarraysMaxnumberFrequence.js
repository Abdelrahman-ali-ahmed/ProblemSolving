var countSubarrays = function(nums, k) {
    const max = Math.max(...nums);
    const n = nums.length;
    let count = 0;
    let freq = 0;
    let left = 0;
  
    for (let right = 0; right < n; right++) {
      if (nums[right] === max) freq++;
  
      while (freq >= k) {
        // All subarrays starting from left to right are valid
        count += n - right;
  
        // Move left pointer forward to shrink window
        if (nums[left] === max) freq--;
        left++;
      }
    }
  
    return count;
  };