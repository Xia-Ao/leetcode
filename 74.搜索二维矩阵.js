/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {

  /**
   * 二分法
   * 1. 通过第一列，先找到对应的所在的行，再在行里面找到对应的target
   */
  const m = matrix.length; // 行
  const n = matrix[0].length; // 列

  let top = 0;
  let bottom = m - 1;
  let mTarget = -1;

  while (bottom >= top) {
    let mMid = (bottom + top) >> 1;
    if (matrix[mMid][0] === target || matrix[mMid][n - 1] === target) {
      return true;
    } else if (matrix[mMid][0] > target) {
      bottom = mMid - 1;
    } else if (matrix[mMid][n - 1] < target) {
      top = mMid + 1;
    } else {
      mTarget = mMid;
      break;
    }
  }
  if (mTarget < 0) {
    return false;
  }

  let left = 0;
  let right = n - 1;
  let arr = matrix[mTarget];
  while (left <= right) {
    let nMid = (right + left) >> 1;
    if (arr[nMid] === target) {
      return true;
    } else if (arr[nMid] > target) {
      right = nMid - 1;
    } else if (arr[nMid] < target) {
      left = nMid + 1;
    } else {
      break;
    }
  }
  return false;
};
// @lc code=end


// console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 16))
