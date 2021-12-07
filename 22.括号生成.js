/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * 参考： https://leetcode-cn.com/problems/generate-parentheses/solution/zui-jian-dan-yi-dong-de-dong-tai-gui-hua-bu-lun-da/
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n === 0) return [];
  let total = [[null], ['()']];

  for (let i = 2; i <= n; i++) {
    let temp = [];
    // 开始遍历 p q ，其中p+q=i-1 , j 作为索引
    for (let j = 0; j < i; j++) {
      let str1 = total[j]; // p = j 时的括号组合情况
      let str2 = total[i - j - 1]; //  q = (i-1) - j 时的括号组合情况
      console.log('str', str1, str2)
      for (s1 of str1) {
        for (s2 of str2) {
          if (!s1) s1 = '';
          if (!s2) s2 = '';
          temp.push(`(${s1})${s2}`);
        }
      }
    }
    // console.log('temp', temp);
    total.push(temp);
  }

  // console.log(total);
  return total[n];
};
// @lc code=end



// generateParenthesis(3);