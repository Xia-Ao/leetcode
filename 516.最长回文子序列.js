/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {

  /**
   * 回文串的遍历思路，都是从中间向两边遍历，判断是否相等，相等的话则回文串增加
   * 从后往前 i是第一层遍历的下标，j是第二层遍历的下标，以i为中间，i向前遍历，j从i+1开始，往后遍历，判断s[i]和s[j]
   * DP dp[i][j] 表示字符串s的[i,j]内的最长回文子序列的长度。
   * s[i] = s[j]，则dp[i][j] = dp[i+1][j-1] + 2
   * s[i] != s[j]，则dp[i][j] = max(dp[i+1][j], dp[i][j-1])
   * 
   */

  // 创建一个二维数组
  const len = s.length;
  const dp = new Array(len).fill(0).map(item => new Array(len).fill(0))

  for (let i = len - 1; i >= 0; i--) {
    dp[i][i] = 1;

    for (let j = i + 1; j < len; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][len - 1];
};
// @lc code=end

