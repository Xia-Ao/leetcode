/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {};

  for (let i = 0; i < strs.length; i++) {
    const key = strs[i].split('').sort().join();
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(strs[i]);
  }
  
  return Object.values(map);

};
// @lc code=end

