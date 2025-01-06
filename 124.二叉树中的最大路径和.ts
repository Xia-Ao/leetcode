/*
 * @lc app=leetcode.cn id=124 lang=typescript
 *
 * [124] 二叉树中的最大路径和
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

function maxPathSum(root: TreeNode | null): number {
  let max = -Infinity;
  function maxGain(node: TreeNode | null) {
    if (!node) return 0;
    const left = Math.max(maxGain(node.left), 0);
    const right = Math.max(maxGain(node.right), 0);
    max = Math.max(max, node.val + left + right);
    return node.val + Math.max(left, right);
  }
  maxGain(root);
  return max;
}
// @lc code=end
