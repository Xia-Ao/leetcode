/*
 * @lc app=leetcode.cn id=1812 lang=javascript
 *
 * [1812] 判断国际象棋棋盘中一个格子的颜色
 */

// @lc code=start
/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  const x = coordinates.charCodeAt(0) - 64;
  const y = +coordinates[1]
  const res = Math.abs(x - y) % 2;
  return Boolean(res);

};
// @lc code=end

