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
  let z = 0; // 正数个数
  let f = 0; // 负数个数
  // 遇到负数时，正负数个数交换，遇到0 时，重置

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      z = 0;
      f = 0;
    } else if (nums[i] > 0) {
      z++;
      if (f) f++; // 同步更新f
      max = Math.max(max, z);
    } else {
      // 正负数交换
      let temp = z;
      z = f;
      f = temp;
      f++;
      if (z) z++
      max = Math.max(max, z);
    }
  }
  return max;
};
// @lc code=end

