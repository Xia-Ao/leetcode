/*
 * @lc app=leetcode.cn id=713 lang=javascript
 *
 * [713] 乘积小于 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {

  /**
   * 先默认都是正整数 实测都是正整数
   */
  // if (k <= 0) {
  //   return 0;
  // }

  // let res = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let mul = nums[i] * 1;
    if (mul < k) {
      count++
    } else {
      continue;
    }
    for (let j = i + 1; j < nums.length; j++) {
      mul *= nums[j];
      if (mul < k) {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
};
// @lc code=end

// numSubarrayProductLessThanK([57,44,92,28,66,60,37,33,52,38,29,76,8,75,22], 18);
