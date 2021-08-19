/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  /**
   * 状态转移方程：dp[i]=dp[j] && check(s[j..i−1])
   */
  const n = s.length;
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;
  // 遍历 检查 dp[i] 和s[i,j]是否在wordDict中，如果是，则dp[j]直接为true
  // 因为dp 默认false，所以再从dp[i]找到最近的dp[j], 再继续
  for (let i = 0; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (dp[i] && wordDict.includes(s.slice(i, j))) {
        dp[j] = true;
      }
    }
  }

  return dp[n];

};

// @lc code=end

