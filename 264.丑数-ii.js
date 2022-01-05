/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  // 暴力法：一直遍历找到第n个

  /**
   * DP 丑数来自 235 乘积，如何按照从小到大顺序排序
   * 每次通过min(p2*2, p3*3, p5*5),拿到最小值，关键问题是怎么确定 p2 p3 p5,
   * 通过三个指针的方式,指针指向当前已排序的dp数组，
   * 
   * dp[i] = min(dp[p2]*2, dp[p3]*3, dp[p5]*5) 
   */

  let dp = new Array(n + 1);
  // 初始值
  dp[1] = 1;
  let p2 = 1;
  let p3 = 1;
  let p5 = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[p2] * 2, dp[p3] * 3, dp[p5] * 5);
    if (dp[i] === dp[p2] * 2) {
      p2++;
    }
    if (dp[i] === dp[p3] * 3) {
      p3++;
    }
    if (dp[i] === dp[p5] * 5) {
      p5++;
    }
  }

  return dp[n]
};
// @lc code=end

