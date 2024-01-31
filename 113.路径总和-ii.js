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
 * 堆栈思想
 */
var pathSum = function (root, targetSum) {
  let res = [];
  let temp = [];

  function helper(root, targetSum) {
    if (!root) return;
    temp.push(root.val);
    if (!root.left && !root.right && root.val === targetSum) {
      res.push([...temp]);
    }

    console.log('temp', temp);
    helper(root.left, targetSum - root.val);
    helper(root.right, targetSum - root.val);
    console.log('temp 准备pop', temp,);
    temp.pop();
  }
  helper(root, targetSum);
  return res;
};
// @lc code=end

