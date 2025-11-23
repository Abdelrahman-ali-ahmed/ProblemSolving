/**
 * @param {number[]} nums
 * @return {number}
 */
// problem:https://leetcode.com/problems/greatest-sum-divisible-by-three/?envType=daily-question&envId=2025-11-23
var maxSumDivThree = function(nums) {
    let sum = 0;
    let mod1 = [];
    let mod2 = [];

    for (let n of nums) {
        sum += n;
        if (n % 3 === 1) mod1.push(n);
        else if (n % 3 === 2) mod2.push(n);
    }

    if (sum % 3 === 0) return sum;

    // Sort to get smallest
    mod1.sort((a,b)=>a-b);
    mod2.sort((a,b)=>a-b);

    let res = 0;

    if (sum % 3 === 1) {
        let remove1 = mod1.length > 0 ? mod1[0] : Infinity;
        let remove2 = mod2.length > 1 ? mod2[0] + mod2[1] : Infinity;
        res = sum - Math.min(remove1, remove2);
    } else { // sum % 3 == 2
        let remove1 = mod2.length > 0 ? mod2[0] : Infinity;
        let remove2 = mod1.length > 1 ? mod1[0] + mod1[1] : Infinity;
        res = sum - Math.min(remove1, remove2);
    }

    return res;
};