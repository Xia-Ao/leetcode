/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 中间扩展法 O(n^2) 空间 O(1)

  /**
   * 这里有一个注意点，因为 aba 和aa都是回文串，
   * 所以，我们将s看做是字符串中间的空格也是一个空字符串，原字符串长度就变成 2*len -1
   * 取mid两边的下标的时候，就要注意区分mid是s[i]还是 s[i]s[i+1]中间的空串
   * 判断的时候直接跳过空串，按照正常字符串判断
   */

  let max = 0;
  let maxStr = s[0];
  if (s.length <= 1) return s

  for (let i = 0; i < s.length; i++) {
    // 取自身
    let left = i;
    let right = i + 1;
    while (left >= 0 & right < s.length && s[left] === s[right]) {

      if (right - left > max) {
        max = right - left;
        maxStr = s.slice(left, right + 1);
      }
      left--;
      right++;
    }
    // console.log('max1', max, maxStr);

    // left 取左边
    left = i - 1;
    right = i + 1;
    while (left >= 0 & right < s.length && s[left] === s[right]) {

      if (right - left > max) {
        max = right - left;
        maxStr = s.slice(left, right + 1);
      }
      left--;
      right++;
    }
    // console.log('max2', max, maxStr);
  }
  return maxStr;


};

// @lc code=end

