function solution(s) {
    function modExp(base, exp, mod) {
      let result = BigInt(1);
      base = base % mod;
  
      while (exp > 0) {
          if (exp % 2 === 1) {
              result = (result * base) % mod;
          }
          exp = Math.floor(exp / 2);
          base = (base * base) % mod;
      }
  
      return result;
  }
  const MOD = BigInt(1e9 + 7);
  const part1 = modExp(BigInt(5), Math.ceil(s / 2), MOD);
  const part2 = modExp(BigInt(4), Math.floor(s / 2), MOD);
  const result = (part1 * part2) % MOD;
    return Number (result); 
  }