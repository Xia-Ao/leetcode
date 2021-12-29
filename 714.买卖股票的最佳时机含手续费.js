/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  const days = prices.length;

  /**
   * DP 两种状态 手上有股票和没股票
   * buy[i] = Max(buy[i-1], sell[i-1] - price[i])
   * sell[i] = Max(sell[i-1], buy[i-1] + price[i] - fee)
   */

  const buy = new Array(days);
  const sell = new Array(days);

  buy[0] = -prices[0];
  sell[0] = 0;

  for (let i = 1; i < days; i++) {
    buy[i] = Math.max(buy[i - 1], sell[i - 1] - prices[i]);
    sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i] - fee);
  }

  return sell[days - 1];
};
// @lc code=end

