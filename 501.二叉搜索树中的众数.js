/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
var findMode = function (root) {
  let map = {};
  function dfs(root) {
    if (!root) return;
    map[root.val] = map[root.val] ? map[root.val] + 1 : 1;
    dfs(root.left);
    dfs(root.right);
  }
  dfs(root);
  let max = 1;
  let res = [];
  for (let key in map) {
    if (map[key] > max) {
      res = [key];
      max = map[key];
    } else if (map[key] === max) {
      res.push(key);
    }
  }
  return res;
};
// @lc code=end

