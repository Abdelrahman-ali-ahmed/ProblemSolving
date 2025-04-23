var countLargestGroup = function(num) {
    if (num.toString().length==1) return num
     
    let arr=[]
    for(let i=0;i<num+1;i++){
     arr.push([i.toString().split("").reduce((acc,cur)=>acc+Number(cur),0),i])
    }
    const frequency = {};
    let maxFreq = 0;
    let mostFrequent = null;
    arr.forEach(item => {
      frequency[item[0]] = (frequency[item[0]] || 0) + 1;
      if (frequency[item[0]] > maxFreq) {
       maxFreq = frequency[item[0]];
       mostFrequent = item;
     }
    });
    let count = 0
for (let key in frequency) {
 if (frequency[key] === maxFreq) {
   count++;
 }
}

return count 
};