/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sMap = {};
  for (let i = 0; i < s.length; i++) {
    if (sMap[s[i]]) {
      sMap[s[i]]++;
    } else {
      sMap[s[i]] = 1;
    }
  }
  const tMap = {};
  for (let i = 0; i < t.length; i++) {
    if (tMap[t[i]]) {
      tMap[t[i]]++;
    } else {
      tMap[t[i]] = 1;
    }
  }

  // 找到最长的
  const temp = Object.keys(sMap) >= Object.keys(tMap) ? sMap : tMap;

  for (let key in temp) {
    if (sMap[key] !== tMap[key])
      return false;
  }
  return true;
};
// @lc code=end


// isAnagram('ab', 'a')
