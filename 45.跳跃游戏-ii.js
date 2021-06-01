/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * 贪心算法：从左往右查找
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let len = nums.length;
  let maxPosition = 0;
  let steps = 0;
  let end = 0

  // 边界情况，不需要访问最后一个位置，不然会增加一次跳跃
  for (let i = 0; i < len - 1; i++) {
    maxPosition = Math.max(maxPosition, i + nums[i])
    if (i === end) {
      end = maxPosition;
      steps++;
    }
  }
  return steps;

};
// @lc code=end

