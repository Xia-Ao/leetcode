/*
 * @lc app=leetcode.cn id=1014 lang=javascript
 *
 * [1014] 最佳观光组合
 */

// @lc code=start
/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
  let len = values.length;
  let left = values[0] + 0;
  let res = 0;

  for (let i = 1; i < len; i++) {
    res = Math.max(res, left + values[i] - i);
    left = Math.max(left, values[i] + i)
  }
  return res;
};
// @lc code=end

