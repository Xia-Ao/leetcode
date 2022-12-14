/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  /**
   * 二分查找
   * 1. 通过二分法，可以确定一边是有序的，一边是无序的，中间数字大于最后的，后半段无序，反之有序
   * 2. 在有序的一边判断target是否在在其中，
   *  2.1 如果在其中，那就使用二分法递归查找有序数组。
   *  2.2 如果不在其中，则在无序数组中递归步骤一中二分法
   */

  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    // console.log(mid);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > nums[right]) { // 前半部有序，后半部无序 
      // 看target是否在有序部分，看丢弃哪一部分
      // 在有序部分 丢弃无序部分，有序部分没有，则丢弃有序部分
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else { // 前半部无序，后半部有序  判断后部分
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};

// console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
// console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
// @lc code=end

