/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let len = nums.length;
  let obj = {};
  for (let i = 0; i < len; i++) {
    if (obj[nums[i]] === undefined) {
      obj[nums[i]] = i;
    } else if (i - obj[nums[i]] <= k) {
      return true;
    } else {
      obj[nums[i]] = i;
    }
  }
  return false;
};
// @lc code=end

