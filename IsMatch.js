var isMatch = function(s, p) {
    let i = 0, j = 0;
   let starIdx = -1, match = 0;
 
   while (i < s.length) {
     if (j < p.length && (p[j] === s[i] || p[j] === '?')) {
       i++;
       j++;
     } else if (j < p.length && p[j] === '*') {
       starIdx = j;
       match = i;
       j++;
     } else if (starIdx !== -1) {
       j = starIdx + 1;
       match++;
       i = match;
     } else {
       return false;
     }
   }
 
   while (j < p.length && p[j] === '*') {
     j++;
   }
 
   return j === p.length;
 };