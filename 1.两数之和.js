/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 最傻逼的方法
  // for (let i = 0; i < nums.length -1; i++) {
  //     for(let j = i+1; j< nums.length; j++) {
  //         if ((nums[i] + nums[j]) == target){
  //                 return [i,j];
  //         } 
  //     }

  // }

  // value index 互换
  // let map = new Map();
  // for (let i =0; i< nums.length; i++) {
  //     let diff = target - nums[i];
  //     if (map.has(diff)) {
  //         return [map.get(diff), i]
  //     }
  //     map.set(nums[i], i);
  // }

  // 如果将map换为一个数组 内存占用会少很多
  let map = [];
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map[diff] !== undefined) {
      return [map[diff], i]
    }
    map[nums[i]] = i;
  }
};
// @lc code=end

