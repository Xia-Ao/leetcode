/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {

  let len = nums.length;
  let obj = {};
  for (let i = 0; i < len; i++) {
    if (obj[nums[i]] === undefined) {
      obj[nums[i]] = i;
    } else {
      return true;
    }
  }
  return false;
};
// @lc code=end

