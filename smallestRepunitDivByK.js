/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
if(k%2===0||k%5===0) return -1;
let r=1%k;
let length=1;
while(r!==0){
  r=(r*10+1)%k;
  length++;
  if(r===0) return length;
}
 return length
};