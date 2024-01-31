/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  /**
   * 滑块窗口
   */
  const tLen = t.length;
  if(s.length< t.length) return '';

  let tMap = {};
  for (let i = 0; i < tLen; i++) {
    if (tMap[t[i]]) {
      tMap[t[i]]++;
    } else {
      tMap[t[i]] = 1;
    }
  }
  // 移除s 前后不在tMap中
  for (let i = 0; i < s.length; i++) {
    if (tMap[s[s[i]]]) {
      s = s.slice(i);
      break;
    }
  }
  for (let i = s.length - 1; i >= 0; i--) {
    if (tMap[s[s[i]]]) {
      s = s.slice(0, i);
      break;
    }
  }

  // 开始滑块
  let i = 0;
  let j = tLen - 1;
  let minStr = '';
  let map = {};
  for (let i = 0; i < tLen; i++) {
    if (map[s[i]]) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }
  while (i <= j - tLen + 1) {
    const va = check();
    // console.log('cur:', s.slice(i, j + 1), va, map);
    if (va || j === s.length - 1) {
      // 取最小的
      if (va) {
        if (!minStr || j - i + 1 < minStr.length) {
          minStr = s.slice(i, j + 1);
        }
      }
      // 左指针右移 同时map[s[i]]--
      map[s[i]]--;
      if (!map[[s[i]]]) {
        delete map[[s[i]]];
      }
      i++;
    } else {
      // 右指针右移 map[s[j]]++
      j++;
      if (map[s[j]] !== undefined) {
        map[s[j]]++
      } else {
        map[s[j]] = 1;
      }
    }
  }
  // console.log('res', minStr);
  return minStr;

  function check() {
    for (let key in tMap) {
      if (!map[key] || map[key] < tMap[key])
        return false;
    }
    return true;
  }
};
// @lc code=end

// minWindow("ADOBECODEBANC", "ABC")