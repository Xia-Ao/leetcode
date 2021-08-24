/*
 * @lc app=leetcode.cn id=740 lang=javascript
 *
 * [740] 删除并获得点数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {

  /**
   * 理解，使用了 nums[i] 之后， nums[i]-1  nums[i]+1 都不可用，
   * 得出规律和连续有关，不连续才可用，联想到 打家劫舍等需要间隔的场景，
   * 因此将原数组的 nums[i] 转化为新数组下标index，在index不相邻的位置找到最大值
   */
  const maxVal = Math.max(...nums);
  let trans = new Array(maxVal + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    trans[nums[i]] += nums[i];
  }

  const n = trans.length;
  if (n === 1) return trans[n - 1];

  let first = trans[0];
  let second = Math.max(first, trans[1]);

  for (let i = 2; i < n; i++) {
    let temp = second;
    second = Math.max(first + trans[i], second);
    first = temp;
  }

  return second;
};
// @lc code=end

deleteAndEarn([3, 4, 2]);