/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {


  /**
   * 2 动态规划
   * 要走到f(i, j)的位置，需要从f(i-1, j) 或者f(i, j-1)这两个位置过来，所以，
   * 状态转移方程就是：f(i, j) = f(i-1, j) + f(i, j-1)
   * 边界条件：f(0, j) = 1; f(i, 0) = 1;
   */

  // 创建一个二维数组
  const f = new Array(m).fill(0).map(item => new Array(n).fill(0))

  // 边界条件 j===0
  for (let i = 0; i < m; i++) {
    f[i][0] = 1;
  }
  // 边界条件 i===0
  for (let j = 0; j < n; j++) {
    f[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      f[i][j] = f[i - 1][j] + f[i][j - 1];
    }
  }
  return f[m - 1][n - 1];
};
// @lc code=end

// uniquePaths(3, 7);
