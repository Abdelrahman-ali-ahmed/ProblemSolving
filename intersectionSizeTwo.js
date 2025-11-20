/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function(arr) {
arr.sort((a, b) => a[1] - b[1]);

let nums = [];

for (let i = 0; i < arr.length; i++) {
    let interval = arr[i];
    let start = interval[0];
    let end = interval[1];

    let count = nums.filter(x => x >= start && x <= end).length;

    if (count >= 2) continue;

    let needed = 2 - count;

    for (let j = end; j >= start && needed > 0; j--) {
        if (!nums.includes(j)) {
            nums.push(j);
            needed--;
        }
    }
}
return nums.length;
};