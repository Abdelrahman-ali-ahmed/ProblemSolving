var multiplyNotWorkCorrect = function(num1, num2) {
    let strToNum=(num)=>{
       let n
       n=num.split("").reverse().map((i,index)=>Number(i)*Math.pow(10,index)).reverse()
       return n
       
     }
   n1=strToNum(num1)
   n2=strToNum(num2)
   let res=n1.map((i)=>{ return n2.map((i2)=>i2*i)} ).flat().reduce((acc, curr) => acc + curr, 0)
  return(`${res}`)
   ;
}; 
 //this is not giving the correct result because it approximates the multiplication using floating point math and place values, which leads to small inaccuracies for large numbers.

 var multiplyWorrkByBigInt = function(num1, num2) {
    return  (BigInt(num1) * BigInt(num2)).toString()
   };
   

   var multiplyWorkWithoutBigInt = function(num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";

      const result = Array(num1.length + num2.length).fill(0);

      for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
          const mul = Number(num1[i]) * Number(num2[j]);
          const p1 = i + j;
          const p2 = i + j + 1;
          const sum = mul + result[p2];
    
          result[p2] = sum % 10;
          result[p1] += Math.floor(sum / 10);
        }
      }
    
      // Remove leading zeros
      while (result[0] === 0) {
        result.shift();
      }
    
      console.log(result.join(''));
   };