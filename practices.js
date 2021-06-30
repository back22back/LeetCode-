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

/** 2
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    var over = 0;
    var head = new ListNode(1);
    var curr = head;
    var sum = 0;
    while (l1 || l2 || over) {
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        sum += over;
        if (sum >= 10) {
            over = 1;
            sum = sum - 10;
        } else {
            over = 0;
        }
        curr.next = new ListNode(sum);
        sum = 0;
        curr = curr.next;
    }
    return head.next;
};

/** 3
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    var max = '';
    for (var i = 0; i < s.length; i++) {
        for (var j = 0; j < 2; j++) {
            var left = i;
            var right = i + j;
            while (s[left] && s[left] === s[right]) {
                left --;
                right ++;
            }
            var curr = s.substring(left + 1, right);
            if (curr.length > max.length) {
                max = curr;
            }
        }
    }
    return max;
};

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