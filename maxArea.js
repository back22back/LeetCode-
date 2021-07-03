/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  var left = 0;
  var right = height.length - 1;
  var max = 0;
  while (left < right) {
      var shorterSide = Math.min(height[left], height[right]);
      var area = shorterSide * (right - left);
      if (area > max) {
          max = area;
      }
      if (height[left] > height[right]) {
          right --;
      } else {
          left ++;
      }
  }
  return max;
};