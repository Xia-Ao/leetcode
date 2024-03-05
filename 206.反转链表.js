/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function (head) {

  let cur = head;
  let pre = null;
  while (cur) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur; 

    // 更新cur
    cur = temp;
  }
  return pre;
};


// @lc code=end

