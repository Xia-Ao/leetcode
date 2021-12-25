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
  // S(n) = Min[S(i-1), S(i-2)] + c(i)]
  const n = cost.length;
  let S = new Array(n).fill(0);

  S[0] = cost[0];
  S[1] = cost[1];
  for (let i = 2; i < n; i++) {
    S[i] = Math.min(S[i - 1], S[i - 2]) + cost[i];
  }
  return  Math.min(S[n - 1], S[n - 2]);
};

// @lc code=end

