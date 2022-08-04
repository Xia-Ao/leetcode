/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // 双指针，借助1-n和下标的关系
  let slow = 0;
  let fast = 0;
  while (nums[slow] !== nums[nums[fast]]) {
  }
};
// @lc code=end

