var findMedianSortedArrays = function(num1, num2) {
    function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const [left, right] = [arr.slice(0, mid), arr.slice(mid)];

    return merge(mergeSort(left), mergeSort(right));
  }

  const merge = (left, right) => {
    let result = [];
    while (left.length && right.length) {
      result.push(left[0] < right[0] ? left.shift() : right.shift());
    }
    return result.concat(left, right);
  };

  const arr = mergeSort([...num1, ...num2]);
  const totalLength = arr.length;
  const medianIndex = Math.floor(totalLength / 2);

  // Check if the total length is odd or even
  if (totalLength % 2 !== 0) {
    console.log(arr[medianIndex]);
    return arr[medianIndex];
  } else {
    const median = (arr[medianIndex - 1] + arr[medianIndex]) / 2; // Average of the two middle elements
    console.log(median);
    return median;
  }
};