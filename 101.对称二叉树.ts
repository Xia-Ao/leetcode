/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return false;
  function isSym(left: TreeNode | null, right: TreeNode | null) {
    if (!left && !right) return true;
    if ((!left && right) || (left && !right)) return false;
    return (
      left.val === right.val &&
      isSym(left.left, right.right) &&
      isSym(left.right, right.left)
    );
  }
  return isSym(root.left, root.right)
}
// @lc code=end
