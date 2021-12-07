/*
 * @lc app=leetcode.cn id=1446 lang=javascript
 *
 * [1446] 连续字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let max = 0;
  let curMax = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      curMax++;
    } else {
      max = Math.max(max, curMax);
      curMax = 1;
    }
  }
  return max
};
// @lc code=end

