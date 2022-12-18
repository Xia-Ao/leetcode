/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let slow = headA;
  let fast = headB;
  while (slow !== fast) {
    slow = slow !== null ? slow.next : headB;
    fast = fast !== null ? fast.next : headA;
  }
  return slow;
};
// @lc code=end

