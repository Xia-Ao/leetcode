/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 深度递归遍历
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let ans;
  const dfs = (root, p, q) => {
    if (root === null ) {
      return false;
    }
    const lson = dfs(root.left, p, q);
    const rson = dfs(root.right, p, q);
    if((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
      ans = root;
    }
    return lson || rson || (root.val === p.val || root.val === q.val);
  }
  dfs(root, p, q);
  return ans




};
// @lc code=end

