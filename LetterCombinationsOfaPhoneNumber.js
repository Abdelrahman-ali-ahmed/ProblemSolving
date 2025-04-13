var letterCombinations = function(num) {
    if(num==="") {return ([])}
         const integerString = (stn) => {
           switch (stn) {
             case "2": return "abc".split("");
             case "3": return "def".split("");
             case "4": return "ghi".split("");
             case "5": return "jkl".split(""); 
             case "6": return "mno".split("");
             case "7": return "pqrs".split("");
             case "8": return "tuv".split("");
             case "9": return "wxyz".split("");
           }
         };
         function combineArrays(...arrays) {
           let result = [''];
           for (let i = 0; i < arrays.length; i++) {
             const currentArray = arrays[i];
             const tempResult = [];
             for (let j = 0; j < currentArray.length; j++) {
               for (let k = 0; k < result.length; k++) {
                 tempResult.push(result[k] + currentArray[j]);
               }
             }
             result = tempResult;
           }
       
           return result;
         }
       
         const character = [];
         for (let i = 0; i < num.length; i++) {
           character.push(integerString(num[i]));
         }
         return(combineArrays(...character));
   };