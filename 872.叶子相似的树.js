/*
 * @lc app=leetcode.cn id=872 lang=javascript
 *
 * [872] 叶子相似的树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {

  let arr1 = dfs(root1, []);
  let arr2 = dfs(root2, []);

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;

  function dfs(root, arr) {
    if (!root) return arr;
    

    if (!root.left && !root.right) {
      arr.push(root.val);
      return arr
    };
    dfs(root.left, arr);
    dfs(root.right, arr);
    return arr;
  }
};
// @lc code=end

