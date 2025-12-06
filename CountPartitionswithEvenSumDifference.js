/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
  let sum=nums.reduce((a,b)=>a+b,0);
  let left =0
  let count=0;
  for(let i=0;i<nums.length-1;i++){
   console.log(left);
   left+=nums[i];
   let right = sum - left;
   if(Math.abs(left-right) %2==0){
    count++;
   }
  }
  return count;
};