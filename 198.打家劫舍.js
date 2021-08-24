/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // 状态转移方程
  // dp[i] = max[dp[i-2] + nums[i], dp[i-1]]

  const n = nums.length;
  if (n === 1) return nums[0]; // 边界， 只有一间房子

  // 固定数组 
  // let dp = new Array(0).fill(0);
  // dp[0] = nums[0];
  // dp[1] = Math.max(nums[0], nums[1]);
  // for (let i = 2; i < n; i++) {
  //   dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  // }
  // return dp[n - 1];

  // 滚动数组
  let first = nums[0];
  let second = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    let temp = second;
    second = Math.max(first + nums[i], second);
    first = temp;
  }
  return second;

};
// @lc code=end

// rob([2, 1, 1, 2]);

