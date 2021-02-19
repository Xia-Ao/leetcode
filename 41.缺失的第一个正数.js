/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  /**
   * 方法一： 哈希表 推荐方法一
   */
  // const N = nums.length;
  // let res = N + 1;

  // // 1. 将<=0 的数变成N+1
  // for (let i = 0; i < N; i++) {
  //   if (nums[i] <= 0) {
  //     nums[i] = N + 1;
  //   }
  // }

  // // 2. 将 0 < |x| <= N 的数，对应的 |x|- 1 下标 位置的数打上标
  // for (let i = 0; i < N; i++) {
  //   const a = Math.abs(nums[i])
  //   if (0 < a && a <= N && nums[a - 1] > 0) {
  //     nums[a - 1] = -nums[a - 1];
  //   }
  // }

  // // 3 返回第一个非负的下标 + 1 ，如果没有则返回N+1，数组长度+1
  // for (let i = 0; i < N; i++) {
  //   if (nums[i] > 0) {
  //     res = i + 1;
  //     break;
  //   }
  // }
  // return res;

  /**
   * 方法二： 置换
   */
  const N = nums.length;
  let res = N + 1;
  // 1. 按照下标置换
  for (let i = 0; i < N; i++) {
    // 这里一定注意，要用while
    while (0 < nums[i] && nums[i] <= N && nums[nums[i] - 1] !== nums[i]) {
      let temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }
  }
  // 2. 返回最小的正整数的下标+1
  console.log(nums);
  for (let i = 0; i < N; i++) {
    if (nums[i] != i + 1) {
      console.log('---', i)
      return i + 1;
    }
  }
  return res;

 

};

console.log(firstMissingPositive([3, 4, -1, 1]));
// @lc code=end

