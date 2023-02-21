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
  if (!head || !head.next) return head;
  // 判断head是否长度是够k，不够的话直接return 同时找到k段链表的最后一个
  let len = 1;
  let cur = head;
  while (cur && cur.next && len < k) {
    cur = cur.next;
    len++;
  }
  if (len < k) return head;

  let temp = cur.next; // 之后的暂存
  cur.next = null; // 切断链表
  // 反转 生成新的链表
  let newHead = reverse(head);
  // 走到新链表的最后一个，然后拼接后面 反转的链表
  cur = newHead;
  while (cur && cur.next) {
    cur = cur.next;
  }
  cur.next = reverseKGroup(temp, k);
  return newHead;
};

// 反转链表
function reverse(head) {
  if (!head) return head;

  let cur = head;
  let pre = null; // 定义一个pre存已经反转过的

  while (cur) {
    const temp = cur.next;
    cur.next = pre; // 将pre拼接到cur后面
    pre = cur; //  cur 此时就是反转后的，所以赋给pre
    cur = temp; // cur 改为未处理的，现在开始
  }
  return pre;
}
// @lc code=end
// reverseKGroup([1,2,3,4,5], 2);
