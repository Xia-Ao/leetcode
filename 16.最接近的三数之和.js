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
  // 与target最小的差距
  let minDiff = Number.MAX_SAFE_INTEGER;
  let res = null;
  // 第一层遍历
  for (let i = 0; i < nums.length - 2; i++) {
    // 双指针
    let L = i + 1;
    let R = nums.length - 1;
    let target2 = target - nums[i];

    while (L < R) {
      // console.log(i, L, R);
      let rest = nums[L] + nums[R];
      // 如果存在比上一个最小差距更小的值， 则更新
      let diff = target2 - rest;
      if (diff >= 0) {
        L++
      } else {
        R--;
      }
      let newDiff = Math.abs(diff);
      if (newDiff < minDiff) {
        minDiff = newDiff;
        res = rest + nums[i];
      }

    }
  }

  return res;
};

// threeSumClosest([0,2,1,-3], 1);
// threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82);
// @lc code=end

