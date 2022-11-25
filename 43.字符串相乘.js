/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  // 乘法口诀
  const len1 = num1.length;
  const len2 = num2.length;
  let sum = '';
  let test = [];
  for (let i = 0; i < len2; i++) {
    let x = num2[len2 - i - 1];
    let res = 0;
    let jinwei = 0
    for (let j = 0; j < len1 || jinwei > 0; j++) {
      if (j >= len1) {
        res += jinwei * Math.pow(10, j);
        jinwei = 0;
      } else {
        let temp = x * num1[len1 - j - 1] + jinwei;
        // console.log('temp', temp);
        res += ((temp) % 10) * Math.pow(10, j);
        // 拿到新的进位
        jinwei = Math.floor((temp) / 10)
      }
    }
    // console.log('res', res * Math.pow(10, i));

    // console.log(`sum${i}`, sum, res.toString() + Array(i).fill('0').join(''));
    sum = stringAdd(sum, res.toString() + Array(i).fill('0').join(''))
  }
  // console.log(sum);

  return sum;
};

function stringAdd(s1, s2) {
  let len1 = s1.length - 1;
  let len2 = s2.length - 1;

  let res = [];
  let add = 0;
  while (len1 >= 0 || len2 >= 0) {
    const temp = (+s1[len1] || 0) + (+s2[len2] || 0) + add;
    res.unshift((temp % 10).toString());
    add = Math.floor(temp / 10);
    len1--;
    len2--;
  }

  if (add) {
    res.unshift(add.toString());
  }
  // console.log(res.join(''))
  return res.join('');
}
// @lc code=end

multiply('123456789', '987654321');
// stringAdd('', '123456789');
