var maximumTripletValue = function(nums) {
    let max = 0;
   for (let i = 0; i < nums.length; i++) {
       for (let j = i + 1; j < nums.length; j++) {
           for (let k = j + 1; k < nums.length; k++) {
               if (nums[i] < 0 && nums[j] < 0 && nums[k] < 0) return 0;
               let value = (nums[i] - nums[j]) * nums[k];
               max = Math.max(max, value);
           }
       }
   }
   return max
};