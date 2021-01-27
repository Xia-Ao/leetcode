/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  
  /**
   * 注意本题的说明，原地修改
   * 为什么返回数值是整数，但输出的答案是数组呢?
   */
  if (nums.length == 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      nums[++i] = nums[j];
    }
  }
  return i + 1;
};

// console.log(removeDuplicates([1, 1, 2]));
// @lc code=end

