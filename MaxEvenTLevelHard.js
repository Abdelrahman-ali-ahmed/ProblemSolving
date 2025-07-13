/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function(events, k) {
  events.sort((a, b) => a[2] - b[2]).reverse();
  let count = 0;
  let flag=false
  let res=0
  let used = new Set(); 
  for(let [start,end,value] of events){
    if (count === k) {
      break;
    }
    for(let i=start;i<=end;i++){
      if(!used.has(i)){
        used.add(i)
      }else{
        flag= true
        count--
        break
      }
    }
    if(flag!== true){
   res=res+value
    }
    flag=false
    count++
  }
  
return res
};