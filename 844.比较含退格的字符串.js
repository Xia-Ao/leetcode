/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {

  function getStr(str) {
    let i = 0;
    const temp = [];
    while (i < str.length) {
      if (str[i] !== '#') {
        temp.push(str[i]);
      } else {
        temp.pop();
      }
      i++;
    }
    return temp.join('');
  }
  return getStr(s) === getStr(t)
};
// @lc code=end

// console.log(backspaceCompare("a#c", "b"));
