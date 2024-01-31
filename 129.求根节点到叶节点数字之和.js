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
  let stack = [];
  let res = []
  function dfs(tree) {
    if (!tree) return;
    stack.push(tree.val);
    if (!tree.left && !tree.right) {
      res.push(stack.join(''));
    }
    dfs(tree.left)
    dfs(tree.right)
    stack.pop();
  }
  dfs(root);
  return res.reduce((last, cur) => last + +cur, 0)
};
// @lc code=end

