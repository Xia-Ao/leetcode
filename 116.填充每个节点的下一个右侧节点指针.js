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
  // 层序遍历
  if (!root) return root;

  const queen = [];
  queen.push(root)

  while (queen.length) {
    let len = queen.length;
    for (let i = 0; i < len; i++) {
      let cur = queen.shift();
      cur.next = (i !== len - 1) ? queen[0] : null;
      if (cur.left) queen.push(cur.left);
      if (cur.right) queen.push(cur.right);
    }
  }
  return root;
};
// @lc code=end

