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
      continue;
    }
    if (!str && (s[i] === '-' || s[i] === '+')) {
      if(prefix) return 0;
      prefix = s[i];
      continue;
    }
    // console.log('i:', i, s[i])
    if (/[1-9]/.test(s[i])) {
      str += s[i];
    } else {
      break;
    };
  }
  // console.log(str, prefix);
  const res = Math.min(max, +str);
  return prefix === '-' ? -res : res;
};
// console.log(myAtoi("   -42"));
// @lc code=end

