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

  let max = s[0];
  let maxLen = 1;
  const len = s.length;

  /**
   * 这里有一个注意点，因为 aba 和aa都是回文串，
   * 所以，我们将s看做是字符串中间的空格也是一个空字符串，原字符串长度就变成 2*len -1
   * 取mid两边的下标的时候，就要注意区分mid是s[i]还是 s[i]s[i+1]中间的空串
   * 判断的时候直接跳过空串，按照正常字符串判断
   */
  for (let i = 1; i < (2 * len - 1); i++) {
    // 通过i的奇偶判断 是s[i] 还是s[i]s[i+1]中间的空串
    let j, k;
    if (i % 2) { // 奇数 两数中间空串
      j = i >> 1;
      k = j + 1;
    } else { // 偶数 当前s[i/2]
      j = (i / 2) - 1;
      k = j + 2;
    }

    // 从中间往两边扩展 只要j k 在区间内并且 s[j] === s[k] 就一直遍历
    while (j >= 0 && k < len && s[j] === s[k]) {
      if (k - j + 1 >= maxLen) {
        max = s.slice(j, k + 1);
        maxLen = k - j + 1;
      }
      j--;
      k++;
    }
  }
  return max;
};

// @lc code=end

