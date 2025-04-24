var countCompleteSubarrays = function(nums) {
    let distinct =[... new Set(nums)].length
 if (distinct==1) return (nums.length*(nums.length+1)/2)
 
 let count =0
 for(let i=0;i<nums.length;i++){
   let set =new Set()
   for(let j=i;j<nums.length;j++){
     set.add(nums[j]);
     if(set.size==distinct){
       count++
     }else if (set.size > distinct) {
       break; 
     }
 
   }
 }
     return(count );
 };