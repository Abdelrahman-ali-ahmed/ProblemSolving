/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
if (s.length < 2) return s;

  let start = 0, end = 0;

  for (let i = 0; i < s.length; i++) {
    // Odd length palindrome
    expand(i, i);
    // Even length palindrome
    expand(i, i + 1);
  }

  function expand(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left > end - start) {
        start = left;
        end = right;
      }
      left--;
      right++;
    }
  }

  return s.slice(start, end + 1);
};


var longestPalindrome2 = function(s) {
    function getAllSubstrings(str) {
  const substrings = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substrings.push(str.slice(i, j));
    }
  }

  return substrings;
}
 let Palindromic=getAllSubstrings(s).filter((item)=>item.split("").reverse().join("")===item).sort((a,b)=>b.length-a.length)[0]

return Palindromic
};