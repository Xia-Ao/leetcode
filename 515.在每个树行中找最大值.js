/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
 * @return {number[]}
 */
var largestValues = function (root) {
  let res = [];
  if (!root) return res;
  const queen = [root];
  while (queen.length) {
    const len = queen.length;
    let max = -Infinity;
    for (let i = 0; i < len; i++) {
      const cur = queen.shift();
      max = Math.max(max, cur.val);
      if (cur.left) queen.push(cur.left);
      if (cur.right) queen.push(cur.right);
    }

    res.push(max);
  }
  return res;
};
// @lc code=end

