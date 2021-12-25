/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let res = new Array(rowIndex);

  for (let i = 0; i <= rowIndex; i++) {
    res[i] = new Array(i);
    // 处理边上
    res[i][0] = 1;
    res[i][i] = 1;
    // 处理中间
    for (let j = 1; j < i; j++) {
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
    }
  }

  return res[rowIndex];
};
// @lc code=end

