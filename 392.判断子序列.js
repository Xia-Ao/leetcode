/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {

  let minLeft = 0;
  for (let i = 0; i < s.length; i++) {
    const index = t.slice(minLeft).indexOf(s[i]);
    if (index === -1) return false;
    // 这里不要遗漏了 minLeft
    minLeft = minLeft + index + 1;
  }
  return true;
};
// @lc code=end