/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {

  /**
   * 二分法 和33是差不多的一个问题
   */

  let left = 0;
  let right = nums.length - 1;
  let min = nums[0];

  while (left <= right) {
    const mid = (left + right) >> 1;

    // 前半部分为顺序
    if (nums[mid] > nums[right]) {
      min = Math.min(min, nums[left]);
      left = mid + 1;
    } else {
      min = Math.min(min, nums[mid]);
      right = mid - 1;
    }
  }
  return min;
};
// @lc code=end

