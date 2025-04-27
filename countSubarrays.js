var countSubarrays = function(arr) {
    let count =0
for (let i=0 ; i<arr.length ;i++){
  if(arr[i]+arr[i+2]==arr[i+1]/2){
    count++
  }
}
return(count);
}