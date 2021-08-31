/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (left === right) return head;

  let newHead = new ListNode(0, head);
  let pre = newHead;

  // 1. 找到左边值
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next
  }

  // 2. 找到右边
  let rightNode = pre;
  for (let i = 0; i < right - left + 1; i++) {
    rightNode = rightNode.next;
  }

  // 3. 切除一个子链
  let leftNode = pre.next;
  // 暂存后面的
  let last = rightNode.next; 
  //  切断子链前后
  pre.next = null;
  rightNode.next = null;

  // 4 反转子链
  reverseList(leftNode);

  // 5. 拼接 注意反转链表后，首尾变了， left变成了right，right => left ,拼接的时候注意
  pre.next = rightNode;
  leftNode.next = last;

  return newHead.next;

  // 反转链表
  function reverseList(head) {

    let currentNode = head; // 1
    let preNode = null; // 

    while (currentNode) {
      let temp = currentNode.next; // 2345 暂存起来
      currentNode.next = preNode // 使用前一个值替换 
      preNode = currentNode; // 前一个值等于当前替换后的链表
      currentNode = temp; // 当前链表替换为暂存起来的值
    };
    return preNode;
  };

};
// @lc code=end

