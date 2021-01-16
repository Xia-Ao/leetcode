/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // 1. 暴力方法 
  const all = [...nums1, ...nums2].sort((a, b) => a - b);
  let mid = all.length >> 1;
  const isOdd = Boolean(all.length % 2);
  const result = isOdd ? all[mid] : (all[mid - 1] + all[mid]) / 2;
  return result

  /**
   * 方法二  二分法
   * 一看到有序，一定要利用起来，典型的二分
   */

};

// findMedianSortedArrays([1, 2], [3, 4]);
// findMedianSortedArrays([3], [-2, -1]);
// @lc code=end

