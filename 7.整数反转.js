/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

  x = String(x);
  let flag = '';
  if (x[0] === '-') {
    flag = '-';
    x = x.slice(1);
  }

  let y = '';
  for (let i = x.length - 1; i >= 0; i--) {
    if (y || x[i] !== '0') {
      y += x[i];
    }
  }
  // console.log('x', x, y)
  const res = Number(flag + y)
  if (res >= Math.pow(2, 31) || res < -Math.pow(2, 31)) return 0;
  return res;
};
// @lc code=end

