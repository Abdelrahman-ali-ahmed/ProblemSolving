var singleNumber = function(nums) {
  let a={}
  for(let i=0 ;i<nums.length;i++){
      a[nums[i]]=(a[nums[i]]||0)+1
    }
    const num  = + Object.keys(a).find(key => a[key] === 1)
    
    return num;
    

};
var singleNumber2 = function(nums) {
    let result=0
    for(let i=0;i<nums.length;i++){
        result=result^nums[i]
    }
    return result
};