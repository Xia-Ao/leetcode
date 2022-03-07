/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

  // 方法一 转数字 再计算，然后转数组，需要处理前置0情况

  // 方法二 模拟计算，从数组尾部开始
  let len = digits.length;
  let add = 1;
  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] + add >= 10) {
      digits[i] = 0;
      add = 1;
    } else {
      digits[i] += add;
      add = 0;
    }
    if (add === 0) break;
  }
  if (add === 1) {
    digits.unshift(1);
  }
  return digits;
};
// @lc code=end

