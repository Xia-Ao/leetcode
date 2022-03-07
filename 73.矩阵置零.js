/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {

  // 使用数组缓存 i,j
  let x = [];
  let y = [];
  let len = matrix.length;
  let len2 = matrix[0].length;

  // 找到ij
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len2; j++) {
      if (matrix[i][j] === 0) {
        x.push(i);
        y.push(j);
      }
    }
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len2; j++) {
      if (x.includes(i) || y.includes(j)) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};
// @lc code=end

