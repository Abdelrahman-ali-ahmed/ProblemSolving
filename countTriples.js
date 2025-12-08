/**
 * @param {number} n
 * @return {number}
 */
// problem: https://leetcode.com/problems/count-square-sum-triples/description/?envType=daily-question&envId=2025-12-08
var countTriples = function(n) {
     let count = 0;

    for (let m = 2; m * m <= n; m++) {
        for (let k = (m % 2) + 1; k < m; k += 2) { 
            // ensure m-n is odd → n = k
            let a = m*m - k*k;
            let b = 2*m*k;
            let c = m*m + k*k;

            if (c > n) continue;
            if (gcd(m, k) !== 1) continue;

            // count multiples
            let maxK = Math.floor(n / c);
            count += maxK;
        }
    }
    return count*2;
};
function gcd(a, b) {
    while (b !== 0) [a, b] = [b, a % b];
    return a;
}