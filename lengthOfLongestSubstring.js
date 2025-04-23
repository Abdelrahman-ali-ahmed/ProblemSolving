var lengthOfLongestSubstring = function(s) {
    if (s==="") return 0    
      let max=1
      let stack=[]
      for(let i of s ){ 
        let count =0
       if(stack.indexOf(i)<0){
        stack.push(i)
        console.log(i);
       }else{
        console.log(stack);
        let loc =stack.indexOf(i)
        stack.push(i)
        stack=stack.splice(loc+1,stack.length)
       }
       count=stack.length
       if(count> max){max=count}
      }   

      return(max);
};