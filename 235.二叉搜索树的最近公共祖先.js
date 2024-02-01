/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // root p q 都是tree
  const min = Math.min(q.val, p.val);
  const max = Math.max(q.val, p.val);
  function dfs(root) {
    if (!root) return;
    if (root.val >= min && root.val <= max) return root
    return dfs(root.val >= max ? root.left : root.right);
  }
  return dfs(root);
};
// @lc code=end

