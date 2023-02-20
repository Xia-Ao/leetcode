/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
  let newList = new ListNode(null);
  let cur = newList;

  // 先过滤 空链表
  lists = lists.filter(list => list && list.val !== undefined)


  while (lists.length) {
    let curMin = Number.MAX_SAFE_INTEGER;
    let minIndex = -1;
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].val < curMin) {
        minIndex = i;
        curMin = lists[minIndex].val;
      }
    }

    // 找到本次最小的 链表 将值给新链表，同时将该链表后移
    cur.next = new ListNode(curMin);
    cur = cur.next;
    lists[minIndex] = lists[minIndex].next;
    // 如果 最小 lists[i] 空了，则 从 lists中删除 下一次循环不计入
    if (!lists[minIndex]) {
      lists.splice(minIndex, 1);
    }
  }

  return newList.next;
};
// @lc code=end

