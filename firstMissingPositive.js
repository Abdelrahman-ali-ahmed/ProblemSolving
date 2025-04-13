var firstMissingPositive = function(s) {
    s=[...new Set(s.filter((i)=>i>0))].sort((a, b) => a - b)
     for(let [index,i] of s.entries()){
      if(index===0&& i!==1) { console.log(1);return 1}
      else if (index!==0 && i - s[index-1] !== 1 ){ return s[index-1]+1}
      else if (index!==0 && i - s[index-1] === 1 ){continue}
    }
   return s.length+1
};