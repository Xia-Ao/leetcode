/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // 如果前序列表为空，则返回null
  if (!preorder.length) return null;
  // 创建根节点
  let root = new TreeNode(preorder[0]);
  // 如果中序遍历列表为空，则返回根节点
  if (!inorder.length) return root

  // 在中序遍历中找到根节点下标
  let rootIndex = inorder.indexOf(preorder[0]);
  // 根据下标 将中序遍历分为左右两部分
  let leftInorder = inorder.slice(0, rootIndex);
  let rightInorder = inorder.slice(rootIndex + 1);

  // 根据中序遍历左右子数组的长度，将前序遍历序列给分割成左右两个子序列
  let leftPreorder = preorder.slice(1, leftInorder.length + 1);
  let rightPreorder = preorder.slice(leftInorder.length + 1);

  // 递归构建左右子树
  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
};
// @lc code=end

