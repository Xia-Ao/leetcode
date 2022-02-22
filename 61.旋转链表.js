/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
var rotateRight = function (head, k) {
  // 第一种思路，移动多少其实是根据head的长度和k的余数来确定的

  let len = 1;
  // let current = new ListNode(null, head);
  let current = head;
  while (current.next) {
    len++;
    current = current.next;
  }
  k = (len - k) % len; // 如果k大于链表长度，则取余数
  // console.log('len--', len, k);
  if (k === 0) return head;

  current.next = head; // 将链表首尾相连 成为一个单环形链表
  // 找到对应的首节点前一个
  while (k) {
    k--;
    current = current.next;
  } 
  let newHead = current.next; // 新的链表的首节点
  current.next = null; // 将环形链表分开，这里链表首节点的前一个

  return newHead;
};
// @lc code=end

