/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let obj = {};
  nums.forEach((i) => {
    if(obj[i]) {
      obj[i]++;
    } else {
      obj[i] = 1;
    }
  })

  for (let key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
};
// @lc code=end

