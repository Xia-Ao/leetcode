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
  // 条件判断
  if (!postorder.length) return null;
  // 
  const rootValue = postorder[postorder.length - 1];
  let root = new TreeNode(rootValue);
  if (!inorder.length) return root;

  // 在中序遍历中找到根节点下标
  const rootIndex = inorder.indexOf(rootValue);

  // 根据下标 将中序遍历分为左右两部分
  const leftInorder = inorder.slice(0, rootIndex);
  const rightInorder = inorder.slice(rootIndex + 1);

  // 根据中序遍历左右子数组的长度，将后序遍历序列给分割成左右两个子序列
  const leftPostorder = postorder.slice(0, leftInorder.length);
  const rightPostorder = postorder.slice(leftInorder.length, postorder.length - 1);


  // 枸酱 左右子树
  root.left = buildTree(leftInorder, leftPostorder);
  root.right = buildTree(rightInorder, rightPostorder);

  return root;
};
// @lc code=end

