/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {

  if (!root) return null;
  if (root.val > key) {
    root.left = deleteNode(root.left, key);
    return root;
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
    return root;
  }
  if (root.val === key) {
    // 叶子节点
    if (!root.left && !root.right) return null
    if (!root.left) return root.right;
    if (!root.right) return root.left;
    // 此时，左右都有，需要找到左节点的最右子节点，或者右节点的最左节点 删除
    let acc = root.left;
    while (acc.right) {
      acc = acc.right
    }
    root.left = deleteNode(root.left, acc.val);
    acc.left = root.left;
    acc.right = root.right;
    return acc;
  }
  return root;

};
// @lc code=end

