var hammingWeight = function(n) {
    let arr=[];
 while(n>0){
  if(n%2===0){
    n=n/2
    arr.push(0)
  }else{
    n=n-1
    n=n/2
    arr.push(1)
  }
 }
 return(arr.reduce((a,b)=>a+b));
};