/*
 * @lc app=leetcode.cn id=213 lang=typescript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
function rob(nums: number[]): number {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  function robRange(nums: number[], start: number, end: number) {
    let prev1 = 0,
      prev2 = 0;
    for (let i = start; i <= end; i++) {
      const temp = Math.max(prev1, prev2 + nums[i]);
      prev2 = prev1;
      prev1 = temp;
    }
    return prev1;
  }
  return Math.max(robRange(nums, 0, n - 2), robRange(nums, 1, n - 1));
}
// @lc code=end
