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

  // 获取链表长度
  let len = 0;
  while (cur) {
    cur = cur.next;
    len++;
  }

  // 
  cur = head;
  if (n === len) return head.next;
  // 遍历到n
  let i = 0;
  while (i < n && cur) {
    cur = cur.next;
    i++;
  }

  const deleteList = cur.next;
  if(deleteList && deleteList.next){
    cur.next = deleteList.next;
  } else {
    
  }

  // 双指针， 指针位置相差n

};
// @lc code=end