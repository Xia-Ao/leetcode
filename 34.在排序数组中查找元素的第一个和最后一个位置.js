/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

  // 二分法
  let left = 0;
  let right = nums.length - 1;
  let targetLeft = -1;
  let targetRight = -1;

  while (left <= right) {
    let mid = (left + right) >> 1;
    if (target === nums[mid]) {
      targetLeft = mid;
      targetRight = mid;
      while (target === nums[targetLeft - 1]) {
        targetLeft--;
      }
      while (target === nums[targetRight + 1]) {
        targetRight++;
      }
      break;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    }
  }
  return [targetLeft, targetRight]
};

searchRange([5, 7, 7, 8, 8, 10], 6);

// @lc code=end

