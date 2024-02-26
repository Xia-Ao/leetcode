/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {

  // 方法一： 找下标
  if (s.length <= numRows || numRows === 1) return s;
  // 每一个循环是2row -2
  const steps = 2 * numRows - 2;
  let res = '';
  // 每行遍历
  for (let i = 0; i < numRows; i++) {
    let j = i;
    while (s[j] !== undefined) {
      res += s[j];
      // 非首尾只需要加两个
      if (i !== 0 && i !== numRows - 1) {
        let p = steps - 2 * i;
        res += s[j + p] || ''
      }
      j += steps;
    }
  }
  return res;
};

// @lc code=end

