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
  /**
   * f(i) = Max(f(i-1) + nums[i], nums[i])
   */

  let res = nums[0];
  let pre = 0;
  for (let i = 0; i < nums.length; i++) {
    pre = Math.max(pre + nums[i], nums[i])
    res = Math.max(res, pre)
  }
  return res;

};
// @lc code=end

