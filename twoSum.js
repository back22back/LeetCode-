/** 1
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  const arr = [];
  for (let i = 0; i< nums.length; i++) {
      const diff = target - nums[i];
      if (arr[diff] !== undefined) {
          return [arr[diff], i];
      } else {
          arr[nums[i]] = i;
      }
  }
  return [0, 0];
};