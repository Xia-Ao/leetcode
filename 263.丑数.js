/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n === 0) return false;
  const F = [2, 3, 5];
  F.forEach(factor => {
    while (n % factor === 0) {
      n /= factor;
    }
  })
  return n === 1;
};
// @lc code=end

