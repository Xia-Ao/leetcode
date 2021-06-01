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

  console.log(top, bottom, left, right);


  // 按照轨迹遍历
  while (left < right && top < bottom) {
    // 找这个圈
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
    // bottom  right -> left
    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i])
    }
    bottom--;
    // left  bottom -> top
    for (let i = bottom; i >= top; i--) {
      console.log(i, left);
      res.push(matrix[i][left]);
    }
    left++;

    console.log('--', res, left, right,);
  }

  console.log(res);
  console.log('top', top, 'bottom', bottom, 'left', left, 'right', right);

  // 规则的外圈都处理完了，就剩下单独的一行或者一列，单独处理
  if (left < right && top === bottom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i])
    }
  } else if (top < bottom && left === right) {
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right])
    }
  } else if (left === right && top === left && left === top && right === bottom) {
    res.push(matrix[top][left])
  }
  console.log(res);
  return res;

  // 加入数据
};
// @lc code=end

spiralOrder([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]]);