/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let obj={}
  let res=false
  for(let[index,items] of nums.entries()){
if (Object.hasOwn(obj, items)){
if(Math.abs(obj[items]-index) <=k) {
  res=true
   break;}else{
    obj[items]=index
    continue
   }

}else(
  obj[items]=index
)
  }
return res 
};