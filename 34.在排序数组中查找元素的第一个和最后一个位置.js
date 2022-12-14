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
  let left = 0;
  let right = nums.length - 1;
  let targetLeft = -1;
  let targetRight = -1;

  // 二分法
  while (left <= right) {
    const mid = (right + left) >> 1;
    if (target === nums[mid]) {
      // 找到了值，在确定左右移动距离
      targetLeft = mid;
      targetRight = mid;
      while (target === nums[targetLeft - 1]) {
        targetLeft--;
      }
      while (target === nums[targetRight + 1]) {
        targetRight++;
      }
      break;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else if(target > nums[mid]) {
      left = mid + 1;
    }
  }
  return [targetLeft, targetRight];
};

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));

// @lc code=end

