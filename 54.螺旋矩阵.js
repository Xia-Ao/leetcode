/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const row = matrix.length;
  const colum = matrix[0].length;

  let top = 0;
  let bottom = row - 1;
  let left = 0;
  let right = colum - 1;
  let res = [];


  // 按照轨迹遍历
  while (left <= right && top <= bottom) {
    // 找这个圈 先遍历上边 右边
    // top  left -> right
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;
    // right  top -> bottom
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right])
    }
    right--;

    // 满足条件的 下边， 左边 遍历
    if (left < right + 1 && top - 1 < bottom) {
      // bottom  right -> left
      for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i])
      }
      bottom--;
      // left  bottom -> top
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left]);
      }
      left++;
    }
    // 一圈遍历完成
  }

  return res;
};
// @lc code=end

// spiralOrder([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]]);