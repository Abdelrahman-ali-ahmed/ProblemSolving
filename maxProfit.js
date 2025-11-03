 var maxProfit = function(s) {
  let max=0
  let minPrice=s[0]
  for(let i=0;i<s.length;i++){
  minPrice = Math.min(s[i],minPrice);
  max = Math.max(max,s[i]-minPrice);
  }
    return max
};
 var maxProfit2 = function(s) {
  let max=0
  let minPrice=s[0]
  for(let i=0;i<s.length;i++){
if(s[i]<minPrice){
  minPrice=s[i]
}else{
  const profit=s[i]-minPrice
  max=profit>max?profit:max
}
  }
  
  return max
};