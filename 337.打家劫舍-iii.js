/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
var rob = function (root) {

  function postOrderDfs(root) {
    if (!root) return [0, 0];

    const right = postOrderDfs(root.right)
    const left = postOrderDfs(root.left)

    // console.log('val', root.val)
    // 抢 当前 和左右节点 不抢的值
    const rob = root.val + right[1] + left[1]
    // 不抢 左右子节点最大的值
    const noRob = Math.max(...right) + Math.max(...left)
    return [rob, noRob]

  }

  const res = postOrderDfs(root);
  return Math.max(...res)
};
// @lc code=end
