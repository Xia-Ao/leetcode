/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
 * @return {number}
 */
var getMinimumDifference = function (root) {

  // // 相邻节点
  // if (!root) return Infinity;
  // const left = root.left ? root.val - root.left.val : Infinity
  // const right = root.right ? root.right.val - root.val : Infinity
  // let temp1 = Math.min(
  //   left,
  //   right,
  //   getMinimumDifference(root.left),
  //   getMinimumDifference(root.right),
  // )
  // console.log(root.val);
  // return temp1;

  // 中序遍历
  let min = Infinity;
  let pre = null;
  function dfs(root) {
    if (!root) return Infinity;
    dfs(root.left);
    // val
    if (pre === null) {
      pre = root.val;
    } else {
      min = Math.min(min, root.val - pre)
      pre = root.val;
    }
    dfs(root.right)
  }
  dfs(root);
  return min;
};
// @lc code=end

