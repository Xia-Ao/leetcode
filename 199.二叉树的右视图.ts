/*
 * @lc app=leetcode.cn id=199 lang=typescript
 *
 * [199] 二叉树的右视图
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

function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];

  const queen: TreeNode[] = [root];
  const res: number[] = [];
  while (queen.length) {
    const len = queen.length;
    for (let i = 0; i < len; i++) {
      const node = queen.shift();
      if (!node) continue;
      if (node.left) queen.push(node.left);
      if (node.right) queen.push(node.right);
      if (i === len - 1) {
        res.push(node.val);
      }
    }
  }
  return res;
}
// @lc code=end
