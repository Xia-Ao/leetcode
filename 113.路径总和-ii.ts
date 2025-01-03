/*
 * @lc app=leetcode.cn id=113 lang=typescript
 *
 * [113] 路径总和 II
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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const res: number[][] = [];
  function dfs(node: TreeNode | null, list: number[], targetSum: number) {
    if (!node) return;
    list.push(node.val);
    if (!node.left && !node.right && node.val === targetSum) {
      res.push([...list]);
    }
    dfs(node.left, list, targetSum - node.val);
    dfs(node.right, list, targetSum - node.val);
    list.pop();
  }
  dfs(root, [], targetSum);
  return res;
}
// @lc code=end
