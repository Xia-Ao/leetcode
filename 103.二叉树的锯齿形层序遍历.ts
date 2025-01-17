/*
 * @lc app=leetcode.cn id=103 lang=typescript
 *
 * [103] 二叉树的锯齿形层序遍历
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  function bfs(node: TreeNode | null, depth: number, res) {
    if (!node) return res;
    if (res[depth] === undefined) {
      res[depth] = [];
    }
    depth % 2 === 0 ? res[depth].push(node.val) : res[depth].unshift(node.val);
    bfs(node.left, depth + 1, res);
    bfs(node.right, depth + 1, res);
    return res;
  }
  return bfs(root, 0, []);
}
// @lc code=end
