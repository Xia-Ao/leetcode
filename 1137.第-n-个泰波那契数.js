/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  const f = new Array(n).fill(0);
  f[0] = 0;
  f[1] = 1;
  f[2] = 1;

  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2] + f[i - 3];
  }

  return f[n];

};
// @lc code=end

