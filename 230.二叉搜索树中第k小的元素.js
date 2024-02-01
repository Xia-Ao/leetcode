/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const res = [];

  function dfs(root) {
    if (root === null) {
      return;
    }
    dfs(root.left);
    res.push(root.val);
    // 减少遍历次数
    if(res.length ===k){
      return
    }
    dfs(root.right);
  }
  dfs(root);
  return res[k - 1]
};
// @lc code=end

