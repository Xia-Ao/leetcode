/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let cur = head;

  // 遍历获取链表长度
  let len = 0;
  while (cur) {
    len++;
    cur = cur.next;
  }

  // 回到head 重头再来
  cur = head;
  if (n === len) {
    return cur.next;
  }
  let i = 0;
  while (i < len - n - 1 && cur) {
    i++;
    cur = cur.next;
  }

  let delNode = cur.next;

  // 如果nextHead后面还有值的话，暂存起来
  if (delNode && delNode.next) {
    cur.next = delNode.next;
  } else {
    cur.next = null;
  }
  return head;

  // 双指针， 指针位置相差n

};
// @lc code=end