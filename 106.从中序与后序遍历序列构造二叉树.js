/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {

  /**
   * 递归思想
   * 持续buildTree
   */

  // 先通过后续找到root
  if (!postorder.length) {
    return null;
  }
  const root = new TreeNode(postorder[postorder.length - 1]);

  // 在中续结果中，找到root，并切割left right
  if (!inorder.length) return root;
  const inorderIndex = inorder.indexOf(root.val);

  const left = inorder.slice(0, inorderIndex);
  const right = inorder.slice(inorderIndex + 1);

  // console.log(inorderIndex, left, right)

  // 找到
  const postorderLeft = postorder.slice(0, left.length);
  const postorderRight = postorder.slice(left.length, postorder.length - 1);

  // console.log(inorderIndex, left, right)

  root.left = buildTree(left, postorderLeft);
  root.right = buildTree(right, postorderRight);
  return root;
};
// @lc code=end

