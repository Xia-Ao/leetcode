/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const len = triangle.length;
  if (len === 1) return triangle[0][0];

  for (let i = 1; i < len; i++) {
    const rowLen = triangle[i].length;
    for (let j = 0; j < rowLen; j++) {
      if (j === 0) {
        triangle[i][j] += triangle[i - 1][j];
      } else if (j === rowLen - 1) {
        triangle[i][j] += triangle[i - 1][j - 1];
      } else {
        triangle[i][j] += Math.min(triangle[i - 1][j - 1], triangle[i - 1][j])
      }
    }
  }
  const lastLen = triangle[len - 1].length;
  let res = Number.MAX_SAFE_INTEGER;
  for (let j = 0; j < lastLen; j++) {
    res = Math.min(res, triangle[len - 1][j]);
  }
  return res;
};
// @lc code=end

