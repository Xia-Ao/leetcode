/*
 * @lc app=leetcode.cn id=437 lang=typescript
 *
 * [437] 路径总和 III
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

function pathSum(root: TreeNode | null, targetSum: number): number {
  const prefix = new Map<number, number>();
  prefix.set(0, 1);
  function dfs(node: TreeNode | null, curSum: number) {
    if (!node) return 0;
    curSum += node.val;
    let res = prefix.get(curSum - targetSum) || 0;
    prefix.set(curSum, (prefix.get(curSum) || 0) + 1);

    res += dfs(node.left, curSum);
    res += dfs(node.right, curSum);

    prefix.set(curSum, prefix.get(curSum)! - 1);
    return res;
  }
  return dfs(root, 0);
}
// @lc code=end
