/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function (head) {

  // let newHead = new ListNode(-1);
  // newHead.next = head;
  // let cur = newHead;
  // while (cur.next && cur.next.next) {
  //   let node1 = cur.next;
  //   let node2 = cur.next.next;
  //   cur.next = node2;
  //   node1.next = node2.next;
  //   node2.next = node1;
  //   cur = node1;
  //   console.log(cur, newHead)
  // }
  // return newHead.next;


  if(!head || !head.next) {
    return head;
  }

  let b = head.next;
  head.next = swapPairs(b.next);
  b.next = head;

  return b;

};
// @lc code=end

