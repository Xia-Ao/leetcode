/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  /**
   * 状态转移 f[n] = f[n-1] + fn[n-2]
   * 难点在于 边界 条件判断
   * 参考 https://pic.leetcode-cn.com/c09dc70d3085792b2b8417843e297f6841fd12f921b0e4fe28a2c4a8dc86dd1e-image.png
   */

  if (s[0] === '0') return 0;
  if (s.length === 1) return 1;

  let pre = 1;
  let cur = 1;

  for (let i = 1; i < s.length; i++) {
    let curTemp = cur;
    if (s[i] === '0') {
      // 如果是10 或者 20 编码是固定的，因此和pre是一致的 
      if (s[i - 1] === '1' || s[i - 1] === '2') {
        cur = pre;
        // console.log('cur', cur);
      } else {
        // 其他情况 则无法编码
        return 0;
      }
    } else if (s[i - 1] === '1') {
      cur = curTemp + pre;
    } else if (s[i - 1] === '2' && s[i] >= 0 && s[i] <= 6) {
      cur = curTemp + pre;
    }

    pre = curTemp;
  }
  return cur;
};

// numDecodings('10');
// @lc code=end

