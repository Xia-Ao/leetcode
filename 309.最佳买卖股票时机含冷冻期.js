/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const days = prices.length;

  /**
   * DP 每天可能存在三个状态 
   * buy[i] 第i天买入
   * sell[i] 第i天卖出
   * cold[i] 第i天再冷冻期
   * 状态转移方程
   * buy[i] = Max(buy[i-1], cold[i-1] - price[i]) 这里有冷冻期，所以，要买入的话，一定是从cold买入
   * sell[i] = Max(sell[i-1], buy[i-1] + price[i])
   * cold[i] = Max(cold[i-1], sell[i-1], buy[i-1])
   * 这里cold是取前一天 三个最优的，
   */
  const buy = new Array(days).fill(0);
  const sell = new Array(days).fill(0);
  const cold = new Array(days).fill(0);

  // 边界
  buy[0] = -prices[0];
  sell[0] = 0;
  cold[0] = 0;

  for (let i = 1; i < days; i++) {
    buy[i] = Math.max(buy[i - 1], cold[i - 1] - prices[i]);
    sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);
    cold[i] = Math.max(cold[i - 1], buy[i - 1], sell[i - 1]);
  }

  return sell[days - 1];
};
// @lc code=end

