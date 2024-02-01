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

  function find(root, key) {
    if (!root) return
    if (root.val === key) {
      if(!root.left && root.right)
      return root;
    } else {
      dfs(root.val < key ? root.right : root.left, key)
    }
  }
  const node = find(root, key);
  if (!node) return root;
  // 找到root.left 最右叶子节点
  function helperLeft(root, parent) {
    if (!root) return;
    if (!root.right) return root.val;
    return helper(root.right, root)
  }

  const t = helper(node.left, node);
  node.val = t;
  return root;
};
// @lc code=end

