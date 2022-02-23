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
var partition = function(head, x) {
  /**
   * 思路：找到第一个x，从x和前一个位置切断链表，再从x往后遍历，
   * 如果val小于x，将val位置拿出，放到切断的前置链表最后一个，再将后置链表 前后位置接上
   * 最后将切断的链表接上
   */

  if(!head || !head.next) return head;
  // let newHead = new ListNode(-1);
  let current = head;
  while(current) {
    
  }

};
// @lc code=end

