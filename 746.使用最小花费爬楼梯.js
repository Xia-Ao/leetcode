/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {

  // 状态转移方程
  // S(n) = Min[S(i-1), S(i-2)] + c(i)
  // cost[cost.length] = 0;
  const n = cost.length;
  let S = new Array(n).fill(0);

  S[0] = cost[0];
  S[1] = Math.min(cost[0], cost[1]);
  for (let i = 2; i < n; i++) {
    S[i] = Math.min(S[i - 1], S[i - 2]) + cost[i - 1];
    console.log(S[i]);
  }
  console.log(S);
  return Math.min(S[n], S[n - 1]);
};

minCostClimbingStairs([10, 15, 20]);
// @lc code=end

