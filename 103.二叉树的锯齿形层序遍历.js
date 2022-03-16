/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function (root) {

  let res = [];
  pre(root, 0, res)
  return res;

  function pre(root, depth, res) {
    if (!root) return;
    // res 扩容
    if (res.length <= depth) {
      res.push([]);
    }
    depth % 2 ? res[depth].unshift(root.val) : res[depth].push(root.val);
    pre(root.left, depth + 1, res);
    pre(root.right, depth + 1, res);
  }
};
// @lc code=end

