const maxluckyNumber=(arr)=>{
     let freq={};
 for(let i=0;i<arr.length;i++){
  freq[arr[i]]=(freq[arr[i]]||0)+1;
 }
let lukNumber=[]
for(let key in freq){
if(Number(key)==freq[key]){
  lukNumber.push(Number(key))
}
}
return lukNumber.length!==0?Math.max(...lukNumber):-1
}