/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  // 同三数之和一样 排序 + 双指针

  let res = [];
  if (nums.length < 4) return res;
  nums = nums.sort((a, b) => a - b);
  console.log(nums);

  for (let i = 0; i < nums.length; i++) {
    // 去重 去除一开始就不符合的数
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length; j++) {
      console.log(i, j,);
      // 去重
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let L = j + 1;
      let R = nums.length - 1;
      const p1 = nums[i] + nums[j];

      while (L < R) {
        let sum = nums[L] + nums[R] + p1;
        if (sum === target) {
          res.push([nums[i], nums[j], nums[L], nums[R]]);
          //  去重
          while (L < R && nums[L] === nums[L + 1]) L++;
          while (L < R && nums[R] === nums[R - 1]) R--;
          L++;
          R--;
        } else if (sum > target) {
          R--
        } else if (sum < target) {
          L++
        }
      }
    }
  }
  console.log(res);
  return res;
};

// fourSum([0, 0, 0, 0], 0);
fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11);
// @lc code=end

