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
  let res = '';
  const n = numRows * 2 - 2;

  // 遍历每一行
  for (let i = 0; i < numRows; i++) {
    let j = i;
    // 使用while循环遍历每轮，避免越界
    while (s[j] !== undefined) {
      res += s[j];
      // 在第一行和最后一行，每次只走一步, 其余行每次走两步
      if (i !== 0 && i !== numRows - 1) {
        res += s[j + n - 2 * i] || '';
      }
      j += n
      // if (i === 0 || i === numRows - 1) {
      //   j += n
      // } else {
      //   // 非diagonal线，走两步
      //   res += s[j + n - 2 * i] || '';
      //   j += n;
      // }
    }
  }

  return res;

};

// @lc code=end

