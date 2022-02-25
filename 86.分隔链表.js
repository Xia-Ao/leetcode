/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  /**
   * 思路：两个辅助链表，small，big ，small放小的，big放大的，最后收尾拼接起来即可
   */

  let small = new ListNode(-1);
  let big = new ListNode(-1);

  let current = head;
  let smallCurrent = small;
  let bigCurrent = big;
  while (current) {
    if (current.val < x) {
      smallCurrent.next = new ListNode(current.val);
      smallCurrent = smallCurrent.next;
    } else {
      bigCurrent.next = new ListNode(current.val);
      bigCurrent = bigCurrent.next;
    }
    current = current.next;
  }
  smallCurrent.next = big.next;
  return small.next;

};
// @lc code=end

