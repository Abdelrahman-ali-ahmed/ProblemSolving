var merge = function(nums1, m, nums2, n) {
    const merged = nums1.slice(0, m).concat(nums2).sort((a, b) => a - b);
     
     for (let i = 0; i < m + n; i++) {
         nums1[i] = merged[i];
     }
 
 };