/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
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
    // console.log('min:', min, 'mid:', mid, 'left:', left, 'right:', right);

    // 前半部分为顺序
    if (nums[mid] > nums[right] && nums[mid] < nums[left]) {
      min = Math.min(min, nums[left]);
      left = mid + 1;
    } else if (nums[mid] < nums[right] && nums[mid] > nums[left]) {
      min = Math.min(min, nums[mid]);
      right = mid - 1;
    } else {
      // 重复
      min = Math.min(min, nums[left] !== undefined ? nums[left]: min , nums[right] !== undefined ? nums[right]: min );
      left++;
      right--;
      // console.log(00);
    }

  }
  // console.log(min);
  return min;
};
// @lc code=end

// findMin([3,3,3,1]);

