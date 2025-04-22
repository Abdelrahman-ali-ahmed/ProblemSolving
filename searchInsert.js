var searchInsert = function(nums, target) {
    let index=nums.indexOf(target)
    if(index===-1){nums.push(target);nums.sort((a,b)=>a-b);index=nums.indexOf(target)}
    return index
};