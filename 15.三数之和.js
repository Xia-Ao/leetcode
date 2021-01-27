/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

  /**
   *  官方解法：排序 + 双指针
   */
  // const res = [];
  // if (nums.length < 3) return res;
  // nums = nums.sort((a, b) => a - b);

  // for (let first = 0; first < nums.length; first++) {
  //   // 跳过重复的元素，保证结果中没有重复的元素， 因为已经排过序，所以可以直接往下一个查找
  //   if (first > 0 && nums[first] === nums[first - 1]) {
  //     continue;
  //   }
  //   let third = nums.length - 1;
  //   let target = -nums[first];

  //   // 第二次遍历
  //   for (let second = first + 1; second < nums.length; second++) {
  //     // 同样 跳过第二轮重复的元素，但是第二个可以和第三个一样
  //     if (second > first + 1 && nums[second] === nums[second - 1]) {
  //       continue;
  //     }
  //     while ((nums[first] + nums[second] + nums[third] > 0) && third > second) {
  //       third--;
  //     }
  //     if (second === third) {
  //       break;
  //     }
  //     if (nums[second] + nums[third] === target) {
  //       res.push([nums[first], nums[second], nums[third]]);
  //     }
  //   }
  // }
  // console.log(res);

  /**
   * 优化官方解法
   */

  let res = [];
  if (nums.length < 3) return res;
  nums = nums.sort((a, b) => a - b);

  // 第一层遍历
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return res;
    // 去重
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let L = i + 1;
    let R = nums.length - 1;
    const target = -nums[i];
    while (L < R) {
      const sum = nums[L] + nums[R];
      if (sum - target === 0) {
        res.push([nums[i], nums[L], nums[R]]);
        // 去重
        while (L < R && nums[L] === nums[L + 1]) L++;
        while (L < R && nums[R] === nums[R - 1]) R--;
        L++;
        R--;
      } else if (sum > target) {
        R--;
      } else if (sum < target) {
        L++;
      }

    }
  }

  return res;
};

// threeSum([-1, 0, 1, 2, -1, -4]);
// threeSum([0, 0]);

// @lc code=end

