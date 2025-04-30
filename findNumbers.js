var findNumbers = function(nums) {
    let count =0
nums.forEach((i)=>{
  if(i.toString().length%2===0){
    count ++
  }
})
return(count);
};