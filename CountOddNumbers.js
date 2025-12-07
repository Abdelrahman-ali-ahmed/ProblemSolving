/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// problem : https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/description/?envType=daily-question&envId=2025-12-07
var countOdds = function(low, high) {
   let count=0;
  for(let i=low;i<=high;i++){if(i%2!=0) count++;}
 return count;  
};