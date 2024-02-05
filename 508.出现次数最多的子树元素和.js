/*
 * @lc app=leetcode.cn id=508 lang=javascript
 *
 * [508] 出现次数最多的子树元素和
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
var findFrequentTreeSum = function (root) {
  const map = {};

  function dfs(root) {
    let res
    if (!root) return null;
    if (!root.left && !root.right) {
      res = root.val;
      map[res] = map[res] === undefined ? 1 : map[res] + 1;
      // console.log('res---', res, map)
      return res;
    };
    const left = dfs(root.left);
    const right = dfs(root.right);
    res = left + right + root.val;
    map[res] = map[res] === undefined ? 1 : map[res] + 1;
    // console.log('res', res, map)
    return res;
  }
  dfs(root);
  // console.log(map);


  let max = 0;
  let res = []
  for (let key in map) {
    // console.log('max', max, map[key] === max)
    if (map[key] === max) {
      res.push(key);
    } else if (map[key] > max) {
      max = map[key];
      res = [key]
    }
  }
  return res;

};
// @lc code=end

