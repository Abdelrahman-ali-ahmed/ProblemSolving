var longestCommonPrefix = function(s) {
    let pre=s[0].split("");
  for(let i of s){  
   pre.map((item,index)=>{
     if(item!==i[index]){
       pre.splice(index)
     }
   })
  }
  return(pre.join(""));
};