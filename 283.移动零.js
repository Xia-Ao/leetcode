/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // 移动0 ：移动的次数偏多
  // 向前移动非0数组
  let len = nums.length;
  for (let i = 0; i < len; i++) {

    if (nums[i] !== 0) {
      let j = i;
      while (j > 0 && nums[j - 1] === 0) {
        let temp = nums[j];
        nums[j] = nums[j - 1];
        nums[j - 1] = temp;
        j--;
      }
    }
  }
  return nums;


};
moveZeroes([0, 1, 0, 3, 12]);
// @lc code=end

