var isValid = function(s) {
    const stack = [];
 const pairs = {
   ')': '(',
   ']': '[',
   '}': '{'
 };

 for (let char of s) {
   if (['(', '[', '{'].includes(char)) {
     stack.push(char);
   } else if ([')', ']', '}'].includes(char)) {
     if (stack.pop() !== pairs[char]) {
       return false;
     }
   }
 }

 return stack.length === 0;
  
};

var isValid2 = function(s) {
    const shapMap={
        "(":1,
        ")":-1,
        "{":2,  
        "}":-2,
        "[":3,
        "]":-3
       }
       const stack = [];
       const mapped = s.split("").map(c => shapMap[c]);
       for (let i of mapped) {
         if (i > 0) {
           stack.push(i);
         } else {
           if (stack.length === 0 || stack.pop() + i !== 0) {
             return false;
           }
         }
       }
       return stack.length === 0;
       
  
};