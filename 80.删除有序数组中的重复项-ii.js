/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

  // 三指针？
  let len = nums.length;
  if (len <= 2) return len;
  let slow = 2;
  let fast = 2;

  while (fast < len) {
    if (nums[fast] !== nums[slow - 2]) {
      nums[slow] = nums[fast];
      slow++;
    }
    ++fast;
  }
  return slow;
};
// @lc code=end

