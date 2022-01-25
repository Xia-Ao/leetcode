/*
 * @lc app=leetcode.cn id=931 lang=javascript
 *
 * [931] 下降路径最小和
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  /**
   * 原地dp
   * dp[i] = dp[i] + min(matrix[i-1][row-1], matrix[i-1][row], matrix[i-1][row+1])
   */

  const len = matrix.length;

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < len; j++) {
      // 边界
      if (j === 0) {
        matrix[i][j] += Math.min(matrix[i - 1][j], matrix[i - 1][j + 1])
      } else if (j === len - 1) {
        matrix[i][j] += Math.min(matrix[i - 1][j - 1], matrix[i - 1][j])
      } else {
        matrix[i][j] += Math.min(matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i - 1][j + 1])
      }
    }
  }
  let res = Number.MAX_SAFE_INTEGER;
  for (let j = 0; j < len; j++) {
    res = Math.min(res, matrix[len - 1][j])
  }

  return res;
};
// @lc code=end

