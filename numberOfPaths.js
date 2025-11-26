/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */

//problem:https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/?envType=daily-question&envId=2025-11-26
var numberOfPaths = function(grid, k) {
      const MOD = 1_000_000_007;
  const m = grid.length;
  const n = grid[0].length;

  // dp[i][j][r]
  const dp = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => Array(k).fill(0))
  );

  dp[0][0][grid[0][0] % k] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {

      const val = grid[i][j];
      
      // skip start
      if (i === 0 && j === 0) continue;

      for (let r = 0; r < k; r++) {

        // from top
        if (i > 0) {
          let prevWays = dp[i-1][j][r];
          let newR = (r + val) % k;
          dp[i][j][newR] = (dp[i][j][newR] + prevWays) % MOD;
        }

        // from left
        if (j > 0) {
          let prevWays = dp[i][j-1][r];
          let newR = (r + val) % k;
          dp[i][j][newR] = (dp[i][j][newR] + prevWays) % MOD;
        }
      }

    }
  }

  return dp[m-1][n-1][0];
};