/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // 方案一：使用数组等暂存，然后首尾遍历，创建一个新的链表，会产生一个新的链表，所以空间复杂度是O(n)
  // 方案二：找中间，然后反转后半部分，然后合并，考察链表基本功

  // 1 找中间
  let cur = head;
  let len = 1; // 确定总长
  while (cur && cur.next) {
    len++;
    cur = cur.next;
  }
  const mid = len >> 1; // 取中间值
  cur = head;
  for (let i = 0; i < mid - 1; i++) {
    cur = cur.next;
  }
  let afterNode = cur.next;
  cur.next = null; // 分割链表 注意一定要分隔链表


  // console.log('分割链表', mid, afterNode, head);

  // 2 反转后半部分
  function revertLink(node) {
    let pre = null;
    let cur = node;
    while (cur) {
      let temp = cur.next; // 临时变量暂存
      cur.next = pre; // 反转
      pre = cur; // 更新pre
      cur = temp;// 最后将temp指向cur 进行下一次
    }
    return pre;
  }
  afterNode = revertLink(afterNode);

  // console.log('反转链表', afterNode);

  // 3 合并
  let newNode = new ListNode(null)
  cur = newNode;
  while (head && afterNode) {
    cur.next = head;
    head = head.next;
    cur = cur.next;
    cur.next = afterNode;
    afterNode = afterNode.next;
    cur = cur.next;
  }
  return newNode.next;

};
// @lc code=end

