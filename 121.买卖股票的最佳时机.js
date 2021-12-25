/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = prices[0];
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    max = Math.max(max, prices[i] - left);
    left = Math.min(left, prices[i]);
  }
  return max;
};
// @lc code=end

