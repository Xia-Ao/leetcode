/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {

  /**
   * 2 动态规划
   * 要走到f(i, j)的位置，需要从f(i-1, j) 或者f(i, j-1)这两个位置过来，所以，
   * 状态转移方程就是：f(i, j) = f(i-1, j) + f(i, j-1)
   * 边界条件：f(0, j) = 1; f(i, 0) = 1;
   */

  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  // 创建一个二维数组
  const f = new Array(m).fill(0).map(item => new Array(n).fill(0))

  // 边界情况 j === 0
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0]) {
      break;
    }
    f[i][0] = 1;
  }
  // 边界情况 i === 0
  for (let j = 0; j < n; j++) {
    if (obstacleGrid[0][j]) {
      break;
    }
    f[0][j] = 1;
  }


  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // 有障碍物 直接跳过，不计数
      if (obstacleGrid[i][j]) {
        f[i][j] = 0;
        continue;
      }
      f[i][j] = f[i - 1][j] + f[i][j - 1];
    }
  }
  return f[m - 1][n - 1];
};
// @lc code=end
