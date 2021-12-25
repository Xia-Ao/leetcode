/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {

  let res = new Array(numRows);

  for (let i = 0; i < numRows; i++) {
    res[i] = new Array(i);
    // 处理边上
    res[i][0] = 1;
    res[i][i] = 1;
    // 处理中间
    for (let j = 1; j < i; j++) {
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
    }
  }

  return res;

};
// @lc code=end

