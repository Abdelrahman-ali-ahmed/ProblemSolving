/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows==1)return s
    let a={}
    let start=0
    let stop=numRows  
    let count=0
    let res=""
    for(let i=0;i<s.length;i++){
      if(count==0){
        count=numRows-2
        a[i]=s.slice(start,stop).split("")
        start=stop
        stop=stop+1
      }else{
        a[i]=new Array(numRows).fill("")
        a[i][count]=s.slice(start,stop)
        count--
        start=stop
       stop=count==0?stop+numRows:stop+1
      }
    
    if(start>=s.length){
      break
    }
    }
for(let i=0;i<numRows;i++){
  for(let j=0;j<Object.keys(a).length;j++){
    if(a[j].length<=i){
      continue
    }else{
      res=res+a[j][i]}
   
  }
}

return(res);
};