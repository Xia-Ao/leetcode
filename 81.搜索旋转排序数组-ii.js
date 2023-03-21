/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  // 二分法 每一次二分，一定是 一段有序，一段反转
  const len = nums.length;

  if (!len) return false;
  if (len === 1) return target === nums[0];

  let l = 0;
  let r = len - 1;
  while (l < r) {
    const mid = (l + r) >> 1;
    // console.log('mid', mid)
    if (target === nums[mid] || target === nums[l] || target === nums[r]) {
      return true;
      // 特殊场景，无法判断
    } else if (nums[l] === nums[mid] && nums[mid] === nums[r]) {
      ++l;
      --r;
    } else if (nums[l] <= nums[mid]) {
      // left段有序
      // 在有序列表区间
      if (nums[l] <= target && nums[mid] > target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
      // right端有序
    } else if (nums[mid] <= nums[r]) {
      // 在有序列表区间
      if (nums[mid] < target && nums[r] >= target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return false;

};
// @lc code=end

// console.log(search([1, 1, 3, 1], 2));