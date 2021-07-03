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