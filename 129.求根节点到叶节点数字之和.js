/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  let temp = '';
  let res = [];

  function helper(root, s) {
    if (!root) {
      return s
    }
    if (!root.left && !root.right) {
      res.push(s + root.val);
      return;
    }
    s += root.val;
    helper(root.left, s)
    helper(root.right, s);
  }

  helper(root, '');

  const sum = res.reduce((a, b) => Number(a) + Number(b), 0);
  return sum;

};
// @lc code=end

