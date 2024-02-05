/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function (root) {
  let maxLeft;
  let maxDepth = -1;
  function dfs(root, depth) {
    if (!root) return;
    if (!root.left && !root.right && depth > maxDepth) {
      maxDepth = depth;
      maxLeft = root.val;
      return;
    }
    dfs(root.left, depth + 1,)
    dfs(root.right, depth + 1,)
  }

  dfs(root, 0)
  return maxLeft;

};
// @lc code=end

