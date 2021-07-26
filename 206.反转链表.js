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


// @lc code=end

