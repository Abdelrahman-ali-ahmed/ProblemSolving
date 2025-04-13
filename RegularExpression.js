function solution(s, p) {
    function isMatch(s, p) {
      let i = 0, j = 0;
  
      while (j < p.length) {
        const nextCharIsStar = p[j + 1] === '*';
  
        if (nextCharIsStar) {
          // Try to skip or consume characters
          while (i <= s.length) {
            if (isMatch(s.slice(i), p.slice(j + 2))) return true;
            if (s[i] === p[j] || (p[j] === '.' && i < s.length)) {
              i++;
            } else {
              break;
            }
          }
          return false;
        } else {
          if (i < s.length && (s[i] === p[j] || p[j] === '.')) {
            i++;
            j++;
          } else {
            return false;
          }
        }
      }
  
      return i === s.length;
    }
   console.log(isMatch(s, p));
   
    return isMatch(s, p);
  }