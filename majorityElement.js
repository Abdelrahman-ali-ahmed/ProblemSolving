/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(s) {
   let numbers={}
  let mag=s.length/2
  let res=0
  for(let num of s ){
    numbers[num]=(numbers[num]||0)+1
    if(numbers[num]>mag){
      res=num
      break;
    }
  }
  return Number(res);
};