/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {

  // 双指针
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      swap(i, p2);
      ++p2;
    } else if (nums[i] === 0) {
      swap(i, p1);
      if (p1 < p2) {
        swap(i, p2);
        // p2++
      }
      p1++;
      p2++;
    }
  }


  function swap(a, b) {
    let temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  }
  return nums;
};
// @lc code=end

