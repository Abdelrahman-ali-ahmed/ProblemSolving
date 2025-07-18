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
         stop=count==0?stop+numRows:stop+1
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
var convert2 = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    let rows = new Array(Math.min(numRows, s.length)).fill("").map(() => "");
    let curRow = 0;
    let goingDown = false;

    for (let c of s) {
        rows[curRow] += c;
        if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
        curRow += goingDown ? 1 : -1;
    }

    return rows.join("");
};