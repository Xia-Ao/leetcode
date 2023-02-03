/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  if (!num) return '';
  const steps = [1000, 500, 100, 50, 10, 5, 1];
  const romanKey = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  let str = '';
  for (let i = 0; i < steps.length; i++) {
    const div = steps[i];
    const int = Math.floor(num / div);
    num = num % div;
    for (let j = 0; j < int; j++) {
      str += romanKey[i];
    }
    // 处理4 9 场景
    const strNum = String(num);
    if (+strNum[0] === 4) {
      if (num >= 400) {
        str += 'CD';
        num = num % 400;
      } else if (num >= 40) {
        str += 'XL';
        num = num % 40;
      } else if (num === 4) {
        str += 'IV';
        num = num % 4;
      }
    }
    if (+strNum[0] === 9) {
      if (num >= 900) {
        str += 'CM';
        num = num % 900;
      } else if (num >= 90) {
        str += 'XC';
        num = num % 90;
      } else if (num === 9) {
        str += 'IX';
        num = num % 9;
      }
    }

    if (num === 0) {
      break;
    }
    continue;
  }
  // console.log(str);
  return str;
};
// intToRoman(40);
// @lc code=end

