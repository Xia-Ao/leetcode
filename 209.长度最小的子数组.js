/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {

  // 暴力法
  // let min = Number.MAX_SAFE_INTEGER;
  // for (let i = 0; i < nums.length; i++) {
  //   let sum = nums[i];
  //   if (sum >= target) {
  //     min = 1;
  //     return min;
  //   }
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (j - i >= min) break;
  //     sum += nums[j];
  //     if (sum >= target) {
  //       // console.log('sum', sum);
  //       min = j - i + 1;
  //       break;
  //     }
  //   }
  // }
  // if (min === Number.MAX_SAFE_INTEGER)
  //   return 0;
  // return min;

  // 双指针
  let l = 0;
  let r = 0;
  
};
// @lc code=end

// minSubArrayLen(7, [2, 3, 1, 2, 4, 3])
