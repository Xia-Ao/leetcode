/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = true;
  }
  for (let i = 0; i <= nums.length; i++) {
    if (!obj[i]) {
      return i
    }
  }
};
// @lc code=end

