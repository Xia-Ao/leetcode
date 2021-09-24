/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const res = [];

  function helper(root, targetSum) {
    let temp = [];
    if (!root) { temp.pop(); return }
    else {
      temp.push(root.val)
    }

    if (!root.left && !root.right && root.val === targetSum) {
      res.push(temp);
      return
    };

    helper(root.left, targetSum - root.val) || helper(root.right, targetSum - root.val);
  }

  helper(root, targetSum);
  return res;
};
// @lc code=end

