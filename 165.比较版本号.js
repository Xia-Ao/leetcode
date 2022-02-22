/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {

  // 1. 拆分为数组并转换为number
  const v1 = version1.split('.').map(v => parseInt(v, 10));
  const v2 = version2.split('.').map(v => parseInt(v, 10));

  // 2. 对比
  const maxLen = Math.max(v1.length, v2.length);
  for (let i = 0; i < maxLen; i++) {
    if ((v1[i] || 0) > (v2[i] || 0)) return 1;
    if ((v1[i] || 0) < (v2[i] || 0)) return -1;
  }
  return 0;
};

// compareVersion('1.0.1', '1');
// @lc code=end

