/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  let i=0;
  while(i<bits.length-1){bits[i]===1? i+=2: i++;}
  return bits.length-1==i;
};
var isOneBitCharacter2 = function(bits) {
let res =true 
let beforeZero=bits.length-2>0?true:false;
let beforeIt=bits.length-3>=0?true:false;
if(beforeZero){
if(beforeIt){
    if(bits[bits.length-2]==1 && bits[bits.length-3]==0){
    res=false;
  }
}else res=false;

}

return res;
};