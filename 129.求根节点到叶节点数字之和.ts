/*
 * @lc app=leetcode.cn id=129 lang=typescript
 *
 * [129] 求根节点到叶节点数字之和
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

function sumNumbers(root: TreeNode | null): number {
  const res: number[] = [];
  function dfs(node: TreeNode | null, queen: number[]) {
    if (!node) return;
    queen.push(node.val);
    if (!node.left && !node.right) {
      res.push(+queen.join(''));
    }
    dfs(node.left, queen);
    dfs(node.right, queen);
    queen.pop();
  }
  dfs(root, []);
  return res.reduce((acc, v) => acc + v);
}
// @lc code=end
