/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // 暴力法
  let map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  let len = digits.length;
  if (len <= 0) return [];
  // 初始第一个
  let res = [...map[digits[0]].split('')];
  // 从第二个开始遍历
  for (let i = 1; i < digits.length; i++) {
    let str = map[digits[i]].split('');
    let newRes = []
    res.forEach((old) => {
      res = str.map((s) => {
        newRes.push(old + s);
      })
    })
    res = newRes;
  }
  return res;
};
// @lc code=end
