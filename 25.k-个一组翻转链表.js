/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {

  if (!head || !head.next || k <= 1) { return head }

  let len = 1;
  let cur = head;
  while (cur && cur.next && len < k) {
    cur = cur.next;
    len++;
  }
  if (len < k) {
    return head;
  }
  let reset = cur.next;
  cur.next = null;

  const newLink = reverse(head)
  let newCur = newLink;
  // 遍历到最后一个
  while (newCur && newCur.next) {
    newCur = newCur.next;
  }
  newCur.next = reverseKGroup(reset, k);
  return newLink;
};

function reverse(head) {
  let cur = head;
  let pre = null;

  while (cur) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;

    cur = temp;
  }
  return pre;
}
// @lc code=end
// reverseKGroup([1,2,3,4,5], 2);
