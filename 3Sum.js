/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  var output = [];
  if (nums.length < 3) {
      return output;
  }
  nums = nums.sort((a,b) => a - b);
  for (var i = 0; i < nums.length - 2; i ++) {
      if (nums[i] > 0) {
          break;
      }
      if (i > 0 && nums[i] === nums[i-1]) {
          continue;
      }
      let j = i + 1;
      let k = nums.length - 1;
      while (j < k) {
          if (nums[i] + nums[j] + nums[k] === 0) {
              output.push([nums[i], nums[j], nums[k]]);
              while (nums[j] === nums[j + 1]) {
                  j++;
              }
              while (nums[k] === nums[k - 1]) {
                  k--;
              }
              j++;
              k--;
          } else if (nums[i] + nums[j] + nums[k] < 0) {
              j++;
          } else {
              k--;
          }
      }
  }
  return output;
};