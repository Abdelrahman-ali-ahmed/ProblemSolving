/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(s) {
   let a={}
for(i=0;i<s.length;i++  ){
  let frist=s[i][0]
  let seconed=s[i][1]
  for(j=frist;j<seconed+1;j++){
 a[j] = (a[j] || 0) + 1;
  }
}
s.sort((a, b) => a[1] - b[1]);
let days=Object.keys(a).map((i)=>Number(i));
let endday=1
let count =0

for(let i=0;i<s.length;i++){
 let frist=s[i][0]
  let seconed=s[i][1]
  for(j=frist;j<seconed+1;j++){
  if(days.includes(j)){
    endday=j
    count++
   const valueToRemove = j;
   const index = days.indexOf(valueToRemove);
    days.splice(index, 1);
    break;
  }
  }



}
return(count);
};
var maxEvents2 = function(s) {
     s.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let used = new Set(); // to store used days

  for (let [start, end] of s) {
    for (let day = start; day <= end; day++) {
      if (!used.has(day)) {
        used.add(day);
        count++;
        break; // move to next interval
      }
    }
  }

  return count;
};