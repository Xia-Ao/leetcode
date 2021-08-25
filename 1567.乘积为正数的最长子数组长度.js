/*
 * @lc app=leetcode.cn id=1567 lang=javascript
 *
 * [1567] 乘积为正数的最长子数组长度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
  /**
   * 用0区分
   */
  let max = 0;
  let z = 0;
  let f = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      z = 0;
      f = 0;
    } else if (nums[i] > 0) {
      z++;
      if (f > 0) f++;
      max = Math.max(max, z);
    } else {
      // 正负数交换
      let temp = z;
      z = f;
      f = temp;
      f++;
      if (z > 0) z++
      max = Math.max(max, z);
    }
  }
  return max;
};
// @lc code=end

