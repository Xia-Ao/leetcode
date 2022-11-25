/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {

  let newArr = [];
  let res = {};
  for (let i = 0; i < nums1.length; i++) {
    newArr[nums1[i]] = i;
  }
  for (let i = 0; i < nums2.length; i++) {
    if (newArr[nums2[i]] !== undefined) {
      res[nums2[i]] = true;
    }
  }
  return Object.keys(res);

};
// @lc code=end

