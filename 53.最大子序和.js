/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

  // 动态规划
  let ans = nums[0];
  let sum = 0;
  for (let num of nums) {
    if (sum > 0) {
      sum += num;
    } else {
      sum = num
    }
    ans = Math.max(ans, sum)
  }
  return ans

};
// @lc code=end

