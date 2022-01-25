/*
 * @lc app=leetcode.cn id=413 lang=javascript
 *
 * [413] 等差数列划分
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {

  // 注意 题目中是说的，子数组是一个连续的序列，这个很关键，不然复杂度上升好多

  if (nums.length < 2) return 0;

  let res = 0; // 最后结果
  let curAdd = 0; // 当前满足最短等差数列 往后添加的个数，满足起始为1
  for (let i = 2; i < nums.length; i++) {
    // 满足等差
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      res += ++curAdd;
    } else {
      curAdd = 0; // 否则重置
    }
  }
  return res;
};
// @lc code=end

