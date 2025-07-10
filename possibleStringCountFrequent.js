/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
 let chs=word.split("")
let res=1
let freq=[]
let start=0
let end=0
let ch=chs[0]
for(let i=1;i<chs.length;i++){
  if(chs[i]===ch){
    end++
    if(i===chs.length-1){
      freq.push([start,end])
    }
  }else{
    freq.push([start,end])
    end=i
    start=i
    ch=chs[i]
  }
}
for(let i=0;i<freq.length;i++){
  res=res+freq[i][1]-freq[i][0]
}  


return(res);
};