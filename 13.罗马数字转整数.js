/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const values = [1000, 500, 100, 50, 10, 5, 1];
  const romanKey = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];

  let num = 0;
  for (let i = 0; i < romanKey.length; i++) {
    const index = s.lastIndexOf(romanKey[i]);
    if (index < 0) continue;
    const curR = s.slice(0, index + 1);
    s = s.slice(index + 1);
    for (let j = curR.length - 1; j >= 0; j--) {
      if (curR[j] === romanKey[i]) {
        num += values[i];
      } else {
        const k = romanKey.indexOf(curR[j]);
        num -= values[k];
      }
    }
  }
  // console.log(num);
  return num;
};
// @lc code=end

// romanToInt('MCMXCIV');