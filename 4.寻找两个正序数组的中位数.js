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
  // const all = [...nums1, ...nums2].sort((a, b) => a - b);
  // let mid = all.length >> 1;
  // const isOdd = Boolean(all.length % 2);
  // const result = isOdd ? all[mid] : (all[mid - 1] + all[mid]) / 2;
  // return result

  /**
   * 方法二  二分法
   * 一看到有序，一定要利用起来，典型的二分
   * 找到两个有序数组中第k小的，k是中间数
   */
  if (nums1.length > nums2.length) {
    const temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }

  let n = nums1.length;
  let m = nums2.length;

  let totalLeft = (n + m + 1) >> 1;
  console.log(totalLeft);

  // 在nums1 的[0,n] 之间查找分割线
  let left = 0;
  let right = n;

  while (left < right) {
    let i = left + ((right - left + 1) >> 1);
    let j = totalLeft - i;
    // 查找判断条件
    if (nums1[i - 1] > nums2[j]) {
      // 下一轮搜索区间 [left, i-1]
      right = i - 1;
    } else {
      // 下一轮搜索区间 [i, right]
      left = i;
    }
  }

  let i = left;
  let j = totalLeft - i;
  let nums1LeftMax = i == 0 ? Number.MIN_SAFE_INTEGER : nums1[i - 1];
  let nums1RightMin = i == n ? Number.MAX_SAFE_INTEGER : nums1[i];
  let nums2LeftMax = j == 0 ? Number.MIN_SAFE_INTEGER : nums2[j - 1];
  let nums2RightMin = j == m ? Number.MAX_SAFE_INTEGER : nums2[j];

  // console.log(nums1LeftMax, nums1RightMin, nums2LeftMax, nums2RightMin);

  if ((n + m) % 2) {
    // 数组和 奇数
    return Math.max(nums1LeftMax, nums2LeftMax);
  } else {
    // 数组和 偶数
    return (Math.max(nums1LeftMax, nums2LeftMax) + Math.min(nums1RightMin, nums2RightMin)) / 2;
  }
};

// findMedianSortedArrays([1, 2], [3, 4]);
findMedianSortedArrays([3], [-2, -1]);
// @lc code=end

