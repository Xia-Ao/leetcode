/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const days = prices.length;

  /**
   * DP 找出所有状态，对每一种状态求最优
   * 每天都有可能是以下四种状态
   * buy1: 第一次买入
   * sell1: 第一次卖出，完成一单
   * buy2: 第二次买入
   * sell2: 第二次卖出，完成交易
   * 
   * 状态转移方程
   * buy1[i] = Max(buy1[i-1], - price[i]) 当天不操作取前一天的，或者买入
   * sell1[i] = Max(sell1[i-1], buy1[i-1] + price[i]) 当天不操作，或者卖出
   * 
   * buy2[i] = Max(buy2[i-1], sell1[i-1] -price[i])
   * sell2[i-1] = Max(sell2[i-1], buy2[i-1] + price[i])
   * 
   * 边界条件 i = 0
   * buy1 = -price[0]
   * sell1 = 0 //当前卖出 
   * buy2 = -price[0];
   * sell2 = 0;
   */


  // let buy1 = new Array(days);
  // let sell1 = new Array(days);
  // let buy2 = new Array(days);
  // let sell2 = new Array(days);

  // buy1[0] = -prices[0]
  // sell1[0] = 0 //当前卖出 
  // buy2[0] = -prices[0];
  // sell2[0] = 0;

  // for (let i = 1; i < days; i++) {
  //   buy1[i] = Math.max(buy1[i - 1], 0 - prices[i]);
  //   sell1[i] = Math.max(sell1[i - 1], buy1[i - 1] + prices[i]);
  //   buy2[i] = Math.max(buy2[i - 1], sell1[i - 1] - prices[i]);
  //   sell2[i] = Math.max(sell2[i - 1], buy2[i - 1] + prices[i]);
  // }

  // console.log(sell1[days - 1], sell2[days - 1])
  // return Math.max(0, sell1[days - 1], sell2[days - 1])

  // 简化 因为可以当天卖出买入，但是是没有收益的，因此 buy1[i] 和buy1[i-1]是一样的，直接简化
  let buy1 = -prices[0]
  let sell1 = 0 //当前卖出 
  let buy2 = -prices[0];
  let sell2 = 0;

  for (let i = 1; i < days; i++) {
    buy1 = Math.max(buy1, 0 - prices[i]);
    sell1 = Math.max(sell1, buy1 + prices[i]);
    buy2 = Math.max(buy2, sell1 - prices[i]);
    sell2 = Math.max(sell2, buy2 + prices[i]);
  }

  return Math.max(0, sell1, sell2)


};
// @lc code=end

