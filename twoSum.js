var twoSum = function(nums, target) {
    let arr=[]
   for(let [index,i]of nums.entries()){
     for(let [indexn,n]of nums.entries()){
       if(i+n==target && index!=indexn){
         arr.push(index,indexn)
         
       }
     } 
   }
   return [... new Set(arr)];
};