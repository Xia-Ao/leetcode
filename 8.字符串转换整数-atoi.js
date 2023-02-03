/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let str = '';
  let prefix = '';
  const max = Math.pow(2, 31);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      if(str.length || prefix) break;
      continue;
    }
    if (!str && (s[i] === '-' || s[i] === '+')) {
      if (prefix) return 0;
      prefix = s[i];
      continue;
    }
    // console.log('i:', i, s[i])
    if (/[0-9]/.test(s[i])) {
      str += s[i];
    } else {
      break;
    };
  }
  // console.log('str:', str)
  if (prefix === '-') {
    res = -Math.min(max, +str)
  } else {
    res = Math.min(max - 1, +str);
  }
  return res;
};
// console.log(myAtoi("21474836460"));
// @lc code=end

