/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  /**
   * 首先，这是一个递归的思想
   * 其次 使用正则对1 进行匹配
   */

   let prev = '1';
   for (let i = 1; i < n; i++) {
     prev = prev.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`)
   }
   return prev;
};
// @lc code=end

