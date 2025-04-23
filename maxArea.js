function maxArea(height, left = 0, right = height.length - 1, max = 0) {
    if (left >= right) return max;

    const area = (right - left) * Math.min(height[left], height[right]);
    max = Math.max(max, area);

    if (height[left] < height[right]) {
      return maxArea(height, left + 1, right, max);
    } else {
      return maxArea(height, left, right - 1, max);
    }


  }
  return(maxArea(height));