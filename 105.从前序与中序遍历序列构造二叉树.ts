/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder?.length || !inorder?.length) return null;
  const root = new TreeNode(preorder[0]);
  const index = inorder.indexOf(preorder[0]);

  const leftIn = inorder.slice(0, index);
  const rightIn = inorder.slice(index + 1);

  const leftPre = preorder.slice(1, index + 1);
  const rightPre = preorder.slice(index + 1);

  root.left = buildTree(leftPre, leftIn);
  root.right = buildTree(rightPre, rightIn);
  return root;
}
// @lc code=end
