/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function (root) {

  let sum = 0;

  function helper(root) {
    if (!root) {
      return;
    }
    sum++;
    // console.log('sum', sum,);
    helper(root.left);
    helper(root.right);
  }

  helper(root);
  return sum;

};
// @lc code=end

