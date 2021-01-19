/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {

  // 排序 + 双指针
  nums = nums.sort((a, b) => a - b);
  
  let curTarget = 0;

  // 第一层便利
  for (let i = 0; i < nums.length; i++) {
    
    // 双指针
    let L = i + 1;
    let R = nums.length - 1;
    let target2 = -target
    while (L < R) {
      
    }
  }

};
// @lc code=end

