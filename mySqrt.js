var mySqrt = function(x) {
    if (x === 0 || x === 1) return x;

  let start = 1;
  let end = Math.floor(x / 2);
  let result = 1;

  while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      let square = mid * mid;

      if (square === x) {
          return mid;
      } else if (square < x) {
          result = mid;     
          start = mid + 1;
      } else {
          end = mid - 1;
      }
  }

  return result;
};