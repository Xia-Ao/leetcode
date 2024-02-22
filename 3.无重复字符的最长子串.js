/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 * 思路： 使用滑动游标法，
 * 1. 确定一个左右游标，初始值一字符串第一位开始
 * 2. 右游标向右移动，直到与游标内有重复的元素，记录位置和当前游标长度, 。
 * 3. 将左游标向右移动到上一步游标内重复元素的位置下一位，重新开始移动右游标。
 * 4. 直到右游标到最后一位，结束滑动，取出记录下的最长游标长度。
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s) return 0;


    let left = 0;
    let right = 0;
    let str = '';
    let max = 0;
    for (let i = right; i < s.length; i++) {
        let index = str.indexOf(s[i]);
        if (index > -1) {
            left += index + 1;
        }
        right++;
        str = s.slice(left, right);
        max = Math.max(max, str.length)
    }
    return max;

};
// test 
// console.log(lengthOfLongestSubstring('abcabcbb'));

// @lc code=end

