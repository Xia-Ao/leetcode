/*
 * @lc app=leetcode.cn id=918 lang=javascript
 *
 * [918] 环形子数组的最大和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  /**
   * 按照评论区的，分两种场景，一种最大和 在中间，一种是在首尾
   * 中间的按照53题最大子序和来处理，
   * 首尾的 max = 数组和 - 最小子序和
   */

  let sum = nums[0];
  let maxSum = nums[0];
  let minSum = nums[0];
  let max = Math.max(-Infinity, maxSum);
  let min = Math.min(Infinity, minSum);
  for (let i = 1; i < nums.length; i++) {
    // 最大子序
    if (maxSum > 0) {
      maxSum += nums[i];
    } else {
      maxSum = nums[i];
    }
    max = Math.max(max, maxSum);

    // 最小子序
    if (minSum < 0) {
      minSum += nums[i];
    } else {
      minSum = nums[i];
    }
    min = Math.min(min, minSum);

    // 数组求和
    sum += nums[i]
  }

  if (max < 0) return max;

  return Math.max(max, sum - min);

};
// @lc code=end

// maxSubarraySumCircular([1,-2,3,-2]);
// maxSubarraySumCircular([5,-3,5]);
// maxSubarraySumCircular([-2, -3, -1]);