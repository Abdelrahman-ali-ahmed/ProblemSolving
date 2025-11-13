/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
const record = {};
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (let i = 0; i < alphabet.length; i++) {
  record[alphabet[i]] = i+1;
}
let result = columnTitle.toUpperCase().split("").reverse().map((char,index)=> {return (Math.pow(26,index)*record[char])}).reduce((a,b)=>a+b)
  return result;  
};