/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {

  /**
   * 
   */
  let max = -Infinity;
  let imax = 1;
  let imin = 1;

  for (let i = 0; i < nums.length; i++) {
    // 如果是负数时，交换imax imin
    if(nums[i]< 0) {
      let temp = imax;
      imax = imin;
      imin = temp;
    }

    imax = Math.max(imax * nums[i], nums[i]);
    imin = Math.min(imin * nums[i], nums[i]);

    max = Math.max(max, imax)
  }

  return max;

};
// @lc code=end

