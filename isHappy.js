var isHappy = function(n) {
    const getNext = (num) => {
  return num
    .toString()
    .split('')
    .reduce((sum, digit) => sum + Math.pow(Number(digit), 2), 0);
};

const seen = new Set();

while (n !== 1 && !seen.has(n)) {
  seen.add(n);
  n = getNext(n);
}

return n === 1;
};