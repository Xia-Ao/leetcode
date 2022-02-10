/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {

  /**
   * DP dp[i] = max(dp[i], dp[j]+1)
   * dp[i]表示以nums[i]结尾的最长递增子序列的长度
   * 这里需要理解的是状态转移方程，j是第二层遍历的下标，
   * 如果nums[i] > nums[j]，nums[j] nums[i]是递增的序列，则能得到一个新的dp[j]+1，
   * 最后就是和dp[i]竞争，取最大值
   */
  const dp = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max.apply(dp, dp);
};
// @lc code=end

// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
