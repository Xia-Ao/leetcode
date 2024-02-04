/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  // 穷举法

  // 前缀和 是个好方法，相减即可得到
  const prefix = new Map();
  prefix.set(0, 1);

  function dfs(root, preSum) {
    if (!root) return 0;

    preSum += root.val;

    let res = prefix.get(preSum - targetSum) || 0;
    prefix.set(preSum, (prefix.get(preSum) || 0) + 1);
    // console.log('preSum', preSum, prefix.get(preSum));
    res += dfs(root.left, preSum)
    res += dfs(root.right, preSum);
    // 清除presum
    prefix.set(preSum, (prefix.get(preSum) || 0) - 1);
    return res;
  }
  return dfs(root, 0);
};
// @lc code=end

