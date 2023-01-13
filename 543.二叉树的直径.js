/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {

  let max = 0;

  function dfs(root) {
    if (root === null) return 0;
    const l = dfs(root.left);
    const r = dfs(root.right);
    max = Math.max(max, l + r + 1);
    return Math.max(l, r) + 1;
  }

  dfs(root);
  return max - 1;
};
// @lc code=end

