var searchRange = function(nums, target) {
    function findBoundary(isFirst) {
     let left = 0;
     let right = nums.length - 1;
     let boundary = -1;
 
     while (left <= right) {
       let mid = Math.floor((left + right) / 2);
 
       if (nums[mid] === target) {
         boundary = mid;
         if (isFirst) {
           right = mid - 1; 
         } else {
           left = mid + 1;  
         }
       } else if (nums[mid] < target) {
         left = mid + 1;
       } else {
         right = mid - 1;
       }
     }
 
     return boundary;
   }
 
   const start = findBoundary(true);
   const end = findBoundary(false);

   return [start, end];
};