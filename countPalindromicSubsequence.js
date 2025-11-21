/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    let arr=s.split('');
let map={}
for(let i=0 ; i<arr.length ; i++){
  if(map[arr[i]]){
    map[arr[i]].count++;
    map[arr[i]].index.push(i);
  }else{
    map[arr[i]]={
      count:1,
      index:[i]
    }
  }
}
const result = Object.keys(map).filter(key => map[key].count >= 2);
const keys = Object.keys(map);
if(result.length==0) return 0
function existsInRange(arr, start, end) {
  return arr.some(num => num >= start && num <= end);
}
let arrStri=[]
for(let i=0 ; i<result.length ; i++){
 let start=map[result[i]].index[0];
 let end=map[result[i]].index[map[result[i]].index.length-1];
 for(let j=0 ; j<keys.length ; j++){
  if(existsInRange(map[keys[j]].index,start,end)&&result[i]!=keys[j] ){
    arrStri.push(`${result[i]}${keys[j]}${result[i]}`);
  }else{ if(result[i]==keys[j] && map[keys[j]].count > 2 ) {
    arrStri.push(`${result[i]}${result[i]}${result[i]}`);
  }
  }
}
 
}
return(arrStri.length);
};