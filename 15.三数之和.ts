/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return [];
  nums = nums.sort((a, b) => a - b);

  const res: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return res;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let target = -nums[i];
    let L = i + 1;
    let R = nums.length - 1;

    while (L < R) {
      const sum = nums[L] + nums[R];
      if (target === sum) {
        res.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L] === nums[L + 1]) L++;
        while (L < R && nums[R] === nums[R - 1]) R--;
        L++;
        R--;
      } else if (sum > target) {
        R--;
      } else {
        L++;
      }
    }
  }
  return res;
}
// @lc code=end
