var reverse = function(s) {
    const negative =s<0? -1:1
    const r=Number(s.toString().split("").filter((i)=> i!=="-").reverse().join(""))*negative
  return(r >= -(2 ** 31) && r <= (2 ** 31 - 1)?r:0);
};