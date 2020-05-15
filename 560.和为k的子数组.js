/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {

  /* 方法一：游标法，两层遍历
   */
  let n = 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let sum = nums[i];
    // console.log('i', i, sum)
    if (sum === k) {
      n++;
    }
    for (let j = i + 1; j < len; j++) {
      sum += nums[j];
      // console.log('j', i, j, sum)
      if (sum === k) {
        n++;
      }
    }
    sum = 0;
  }
return n;
};

// console.log(subarraySum([100, 1, 2, 3, 4], 6));

// @lc code=end

