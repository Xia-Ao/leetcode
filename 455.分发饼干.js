/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // 先排序 
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  // 然后用s去满足j
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= g[j]) {
      j++;
    }
  }
  return j;
};
// @lc code=end