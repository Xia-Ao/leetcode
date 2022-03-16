/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

  // 不要使用数组的splice操作
  // 双指针

  let len = nums.length;
  let slow = 1;
  let fast = 1;

  while (fast < len) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      slow++
    }
    ++fast;
  }
  return slow;
};
// @lc code=end

