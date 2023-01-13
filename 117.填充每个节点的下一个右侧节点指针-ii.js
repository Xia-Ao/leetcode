/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  // 类似 116， 不是完全二叉树，注意判断
  if (root === null) {
    return root;
  }

  let mostLeft = root;
  while (mostLeft.left !== null || mostLeft.right !== null) {
    let head = mostLeft;
    // 使用next的遍历
    while (head !== null) {
      // 第一种情况
      if (head.left !== null) {
        if (head.right !== null) {
          head.left.next = head.right;
          if (head.next !== null) {
            head.right.next = head.next.left || head.next.right;
          }
        } else {
          head.left.next = head.next.left || head.next.right;
        }
      } else if (head.right !== null) {
        if (head.next !== null) {
          head.right.next = head.next.left || head.next.right;
        }
      }
      // 遍历next
      head = head.next;
    }
    mostLeft = mostLeft.left;
  }
  return root;
};
// @lc code=end

