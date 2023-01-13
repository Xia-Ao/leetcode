/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
var findTilt = function (root) {

  let ans = 0;

  function dfs(root) {
    if (!root) return 0;
    const l = dfs(root.left);
    const r = dfs(root.right);
    ans += Math.abs(l - r);
    return l + r + root.val;
  }

  dfs(root);
  return ans;

};
// @lc code=end

