/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  /**
   * 状态转移方程：dp[i] = max[dp[i-2] + nums[i], dp[i-1]]
   * 与上一次不一样的是，首尾相连，那就拆成两个，一个(0, n-1) ，一个(1, n)
   */
  const n = nums.length;
  if (n === 1) return nums[0]; // 边界条件
  let first, second;
  let max1 = 0;
  let max2 = 0;

  // 0 , n-1
  first = nums[0];
  second = Math.max(nums[0], nums[1]);
  for (let i = 2; i < n - 1; i++) {
    let temp = second;
    second = Math.max(first + nums[i], second);
    first = temp;
  }
  max1 = second;

  // 只有数组大于3的时候才 1, n
  if (n >= 3) {
    // 1 , n
    first = nums[1];
    second = Math.max(nums[2], nums[1]);
    for (let i = 3; i < n; i++) {
      let temp = second;
      second = Math.max(first + nums[i], second);
      first = temp;
    }
    max2 = second;
  }

  return Math.max(max1, max2);

};
// @lc code=end

// rob([0, 0]);

