/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(s) {
    //  let a={}
// for(i=0;i<s.length;i++  ){
//   let frist=s[i][0]
//   let seconed=s[i][1]
//   for(j=frist;j<seconed+1;j++){
//  a[j] = (a[j] || 0) + 1;
//   }
// }
// let res=0
// if( Object.keys(a).length ===s.length ){
//   res=s.length
// }
// else if (Object.keys(a).length > s.length){
//  res=s.length
// }else{
//   res=Object.keys(a).length
// }
     let a={}
for(i=0;i<s.length;i++  ){
  let frist=s[i][0]
  let seconed=s[i][1]
  for(j=frist;j<seconed+1;j++){
 a[j] = (a[j] || 0) + 1;
  }
}
let res=0
if( Object.keys(a).length ===s.length ){
  res=s.length
}
else if (Object.keys(a).length > s.length){
 res=s.length
}else{
  res=Object.keys(a).length
}
return(res);
};
