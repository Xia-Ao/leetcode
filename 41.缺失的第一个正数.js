/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  // 哈希表
  const N = nums.length;
  let res = N + 1;

  // 1. 将<=0 的数变成N+1
  for (let i = 0; i < N; i++) {
    if (nums[i] <= 0) {
      nums[i] = N + 1;
    }
  }

  // 2. 将 0 < |x| <= N 的数，对应的 |x|- 1 下标 位置的数打上标
  for (let i = 0; i < N; i++) {
    const a = Math.abs(nums[i])
    if (0 < a && a <= N && nums[a - 1] > 0) {
      nums[a - 1] = -nums[a - 1];
    }
  }

  // 3 返回第一个非负的下标 + 1 ，如果没有则返回N+1，数组长度+1
  for (let i = 0; i < N; i++) {
    if (nums[i] > 0) {
      res = i + 1;
      break;
    }
  }

  return res;
};
// @lc code=end

