var convertToTitle = function(n) {
      let result = [];
  const record = {};
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (let i = 0; i < alphabet.length; i++) {
  record[i + 1] = alphabet[i];
}
  while(n > 0){
    n--;  
    let digit = (n % 26) + 1;
    result.unshift(digit);
    
    n = Math.floor(n / 26);

  }
  result = result.map((num) => record[num]).join("");
  return result;  
};