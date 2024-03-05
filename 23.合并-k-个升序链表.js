/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {

  function mergeTwoLists(l1, l2) {
    const head = new ListNode(-1);
    let cur = head;

    while (l1 && l2) {
      if (l1.val <= l2.val) {
        cur.next = l1;
        l1 = l1.next;
      } else {
        cur.next = l2;
        l2 = l2.next;
      }
      cur = cur.next;
    }
    cur.next = l1 ? l1 : l2;
    return head.next;
  };

  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];
  while (lists.length > 1) {
    const newList = [];
    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i];
      const l2 = i + 1 < lists.length ? lists[i + 1] : null;
      newList.push(mergeTwoLists(l1, l2))
    }
    lists = newList;
  }
  return lists[0]
};



// @lc code=end

