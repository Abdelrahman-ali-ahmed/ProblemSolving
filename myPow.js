var myPow = function(x, n) {
    if(x===-1){
       if(n%2===0){
         return 1
       }else{
         return -1
       }
     }
     if(n===0){
       return 1
     }
     if(x===1){
       return 1
     }
     if(x===0){
       return 0
     }
     if(n<0&&x.toString().length<n.toString().slice(1,n.toString().length).length){
       console.log(0);
       return 0
     }
    
     let res=1
    if(n<0){
       n=-n
       for(let i=0;i<n;i++){
         res=res/x
       }
    }else if(n>0){
       for(let i=0;i<n;i++){
         res=res*x
       }
    }
    return res
};