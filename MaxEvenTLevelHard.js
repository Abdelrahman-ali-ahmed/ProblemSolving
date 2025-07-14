/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function(events, k) {
events.sort((a, b) => a[1] - b[1]);

  const n = events.length;
  const memo = new Map();

  function dfs(i, count, prevEnd) {
    if (count === k || i === n) return 0;

    const key = `${i}-${count}-${prevEnd}`;
    if (memo.has(key)) return memo.get(key);

    // Option 1: skip current event
    let res = dfs(i + 1, count, prevEnd);

    // Option 2: take current event if it doesn't overlap
    let [start, end, value] = events[i];
    if (start > prevEnd) {
      res = Math.max(res, value + dfs(i + 1, count + 1, end));
    }

    memo.set(key, res);
    return res;
  }

  return dfs(0, 0, -1);
};