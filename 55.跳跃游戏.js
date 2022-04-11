/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * 方法一：从后往前遍历，这里的结果只要求能否的boolean值
 * 时间复杂度为O(n)的一次遍历 从后往前遍历，只要每次值都不小于需要跳跃到的位置，即可满足，指针往前移动
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function (nums) {
//   let j = nums.length - 1;
//   let i = nums.length - 2;
//   while (i >= 0) {
//     // 条件 当前值 不小于 当前index到下一个需要跳跃的位置
//     if (nums[i] >= j - i) {
//       j = i;
//       i--;
//     } else {
//       // 不满足条件 
//       i--;
//     }
//   }
//   return j === 0;
// };

/**
 * 方法二：贪心算法 从前往后遍历
 * 计算一个能达到的最大位置，在最大位置的左边 计算每一个值在当前基础上能走到最大位置，用max比较更新最大位置，
 * 只要最大位置 >= len-1，表示都可以到达。
 * @param {*} nums 
 * @returns 
 */
var canJump = function (nums) {
  let len = nums.length;
  let rightMost = 0;
  for (let i = 0; i < len; i++) {
    if (i <= rightMost) {
      rightMost = Math.max(nums[i] + i, rightMost);
      if (rightMost >= len - 1) {
        return true;
      }
    }
  }
  return false
};

// @lc code=end


