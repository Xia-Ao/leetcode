/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 *
 * 这题的思路感觉和二进制相加是一样的
 */
var addStrings = function (num1, num2) {
  let maxLength = Math.max(num1.length, num2.length);
  num1 = num1.padStart(maxLength, '0');
  num2 = num2.padStart(maxLength, '0');

  let singleSum = 0;
  let resStr = '';
  // console.log(maxLength, num1, num2);
  for (let i = maxLength - 1; i >= 0; i--) {
    let sum = +num1[i] + +num2[i] + singleSum;
    // console.log(sum, num1[i], num2[i], singleSum)
    if (sum > 9) {
      singleSum = 1;
      resStr = `${sum % 10}${resStr}`;
    } else {
      singleSum = 0;
      resStr = `${sum}${resStr}`;
    }
  }

  // 别忘了最后一位如果有进位的情况
  return singleSum ? `1${resStr}` : resStr;


};
// @lc code=end
// console.log(addStrings('9', '1'));


