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
   * 思路：找到第一个x，从x和前一个位置切断链表，再从x往后遍历，
   * 如果val小于x，将val位置拿出，遍历前置链表，放到合适的位置，再将后置链表 前后位置接上
   * 最后将切断的链表接上
   */

  if (!head || !head.next) return head;
  // let newHead = new ListNode(-1);
  // 1. 找到第一个x
  let beforeNode = new ListNode(null, head);
  while (beforeNode && beforeNode.next && beforeNode.next.val !== x) {
    beforeNode = beforeNode.next;
  }
  // console.log(beforeNode.val);
  // 2. 切断链表
  let newHead = beforeNode.next;
  let current = newHead;
  beforeNode.next = null;
  // console.log(beforeNode, head);

  // 3. 从x往后遍历
  while (current && current.next) {
    if (current.next.val < x) {
      // 当前val接到后面
      insert(current.next.val, head)
      // 删除当前val
      current.next = current.next.next;
      current = current.next;
    }
  }

  function insert(val, head) {
    let current = new ListNode(null, head);
    while (current && current.next) {
      // 找到位置
      if (current.next.val > val) {
        // 插入
        let newNode = new ListNode(val, current.next);
        current.next = newNode;
        return;
      }
    }

  }

  // 4. 将切断的链表接上
  beforeNode.next = newHead;

  return head;
};
// @lc code=end

