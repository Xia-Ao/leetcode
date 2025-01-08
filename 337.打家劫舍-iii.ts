/*
 * @lc app=leetcode.cn id=337 lang=typescript
 *
 * [337] 打家劫舍 III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rob(root: TreeNode | null): number {
  function dfs(node: TreeNode | null): [number, number] {
    if (!node) return [0, 0];
    const left = dfs(node.left);
    const right = dfs(node.right);
    // rob
    const rob = node.val + left[1] + right[1];
    const notRob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    return [rob, notRob];
  }
  return Math.max(...dfs(root));
}
// @lc code=end
