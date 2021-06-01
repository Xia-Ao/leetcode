/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * 规律：就是从二维数组最后一个元素开始往前遍历，依次取对应的内层数组的对应位置组合即可
 * 几何法： 先水平翻转，再左上右下对角线翻转得到
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let row = matrix.length;

  // 水平翻转
  for (let i = 0; i < row >> 1; i++) {
    let temp = matrix[i];
    matrix[i] = matrix[row - 1 - i];
    matrix[row - 1 - i] = temp;
  }


  // 对角线翻转
  for (let i = 0; i < row; i++) {
    // 注意 这里的起始条件是从 i+1开始，
    // 一开始写成了1开始，导致从第二个内圈开始交换了两次
    for (let j = i + 1; j < row; j++) {
      if (i !== j) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
  }

  return matrix;
};
// @lc code=end

// rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]);
