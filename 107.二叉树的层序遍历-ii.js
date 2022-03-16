/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let res = [];
  pre(root, 0, res);
  return res.reverse();

  function pre(root, depth, res) {
    if (!root) return;
    // 对res扩容
    if (depth >= res.length) {
      res.push([]);
    }
    res[depth].push(root.val);
    pre(root.left, depth + 1, res);
    pre(root.right, depth + 1, res);
  }
};
// @lc code=end

