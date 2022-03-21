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

  let res = [];
  function dfs(root, temp, res) {
    if (!root) {
      return;
    };
    if (!root.left && !root.right) {
      res.push(temp + root.val);
      return;
    }
    temp += root.val;
    dfs(root.left, temp, res);
    dfs(root.right, temp, res);
  }

  dfs(root, '', res);
  let sum = 0;
  res.forEach(item => {
    sum += +item;
  })
  return sum;
};
// @lc code=end

