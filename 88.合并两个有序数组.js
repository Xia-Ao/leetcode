/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 从后往前
  let p1 = m - 1;
  let p2 = n - 1;
  let l = n + m - 1;
  while (p1 >= 0 || p2 >= 0) {
    if (p1 < 0 || nums2[p2] >= nums1[p1]) {
      nums1[l] = nums2[p2];
      p2--;
    } else if (nums2[p2] < nums1[p1]) {
      nums1[l] = nums1[p1];
      p1--;
    } else {
      break;
    }
    l--;
  }
};

// @lc code=end

