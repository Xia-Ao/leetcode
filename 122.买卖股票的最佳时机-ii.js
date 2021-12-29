/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let days = prices.length;

  // 贪心算法，当天可以先卖出再买入，因此问题简化为，只要今天的比昨天的高，就卖出
  // let res = 0;
  // for (let i = 1; i < days; i++) {
  //   if (prices[i] > prices[i - 1]) {
  //     res += prices[i] - prices[i - 1];
  //   }
  // }
  // return res;

  /**
   * DP: 股票状态由两种持有或者不持有，由前一天决定，因此按照天向前转移
   * 持有状态只有两种情况：当天买入，或者昨天持有 取最优即可
   * 不持有状态也只有两种：当天卖出，或者昨天就不持有 取最优即可
   * 使用dp[i][0]表示当天持有股票 dp[i][1]表示当天不持有股票 买入股票 -price, 卖出股票+price
   * 状态换衣方程:
   *  dp[i][0] = Max(dp[i-1][0] , dp[i-1][1] - price[i])
   *  dp[i][1] = Max(dp[i-1][0] , dp[i-1][0] + price[i])
   * 最后，只要看最有一天手里不持有股票的结果即可
   */

  let dp = new Array(days).fill(new Array(2));
  dp[0][0] = 0 - prices[0];
  dp[0][1] = 0

  for (let i = 1; i < days; i++) {
    // 持有股票 昨天持有或者当天买入， 取最优即可
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
    // 不持有股票 昨天不持有，或者当天卖出， 取最优即可
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
  }

  return dp[days - 1][1];

};
// @lc code=end

