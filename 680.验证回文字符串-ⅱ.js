/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(str) {

  let l = 0;
  r = str.length - 1;
  while( l < r) {
    if (str[l] !== str[r]) {
      return isPali(str, l + 1, r) || isPali(str, l, r - 1 );
    }
    l++;
    r--;
  }
  return true

};

let isPali = function (str, l, r) {
  while (l < r) {
    if ( str[l] !== str[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true
}
// @lc code=end

