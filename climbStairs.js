var climbStairs = function(n) {
    if (n === 0 || n === 1) return 1;

let a = 1, b = 1;
for (let i = 2; i <= n; i++) {
  [a, b] = [b, a + b];
}

return b;
};