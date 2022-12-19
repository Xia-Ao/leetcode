/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  /**
   * 思路： 异位词，哈希的概念
   * 
   */

  // 对p取哈希
  const pHash = setHash(p);
  const pLen = p.length;
  // console.log('len', s.length - pLen);
  let res = [];
  for (let i = 0; i <= s.length - pLen; i++) {
    let map = {};
    let diff = false;
    // console.log('i', i)
    for (let j = i; j < i + pLen; j++) {
      if (!pHash[s[j]]) {
        diff = true;
        break;
      } else {
        if (map[s[j]]) {
          map[s[j]]++;
        } else {
          map[s[j]] = 1;
        }
      }
    }
    if (!diff & compareHash(pHash, map)) {
      res.push(i);
    }
    // console.log('999')
  }
  return res;

  function setHash(s) {
    let map = {};
    for (let i = 0; i < s.length; i++) {
      if (map[s[i]]) {
        map[s[i]]++;
      } else {
        map[s[i]] = 1;
      }
    }
    return map;
  }

  function compareHash(a, b) {
    // console.log(a, b);
    for (let key in a) {
      if (a[key] !== b[key]) {
        return false;
      }
    }
    return true;
  }

};
// @lc code=end


findAnagrams("abab", "ab");
