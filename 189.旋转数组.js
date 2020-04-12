/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // if(k === 0) return nums;
    let i = nums.length - k;
    // 方法一
    return [...nums.slice(i), ...nums.slice(0, i)]

};
// console.log(rotate([1,2,3,4,5,6,7], 3));

// @lc code=end

