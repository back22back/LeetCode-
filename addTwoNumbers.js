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