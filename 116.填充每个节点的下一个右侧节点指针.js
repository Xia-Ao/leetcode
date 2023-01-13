/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
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
  /**
   * 在当前层，构建下一层的节点next
   * 如果是同一个父节点，node.left.next = node.right
   * 如果不是同一个父节点，间隔多层， node.right.next = node.next.left
   */

  if (root === null) {
    return root;
  }

  let mostLeft = root;
  while (mostLeft.left !== null) {
    let head = mostLeft;
    // 使用next的遍历
    while (head !== null) {
      // 第一种情况
      head.left.next = head.right;
      // 第二种情况连接
      if (head.next !== null) {
        head.right.next = head.next.left;
      }
      // 遍历next
      head = head.next;
    }
    mostLeft = mostLeft.left;
  }
  return root;
};
// @lc code=end

