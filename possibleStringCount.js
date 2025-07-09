/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
 let chs=word.split("")
let res=1
for(let i=0;i<chs.length;i++){
 let count =0
for(let j=i+1 ;j<chs.length;++j){
  if(chs[i]===chs[j]){
   count++
  }else{
    i=j
break
  }
  
  res=res+count
  
}
}

return(res>chs.length?chs.length:res);
};