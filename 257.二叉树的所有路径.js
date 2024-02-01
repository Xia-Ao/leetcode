/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const res = [];
  // const stack = []
  function dfs(root, stack) {
    if (!root) return
    stack.push(root.val);
    if(!root.left && !root.right) {
      res.push(stack.join('->'))
    }
    dfs(root.left, stack)
    dfs(root.right, stack)
    stack.pop()
  }
  dfs(root, []);
  return res;
};
// @lc code=end

