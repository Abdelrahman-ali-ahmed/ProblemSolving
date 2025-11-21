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
  for(let i=0;i<bits.length;i++){
    if (bits[i] ===1){
      console.log(bits.length,i)
      let check=i+2 
      if(check>bits.length-1){
        console.log(check,bits.length,i);
        res=false
        break;
      }
      i++;
    }
  }
  
return res
};