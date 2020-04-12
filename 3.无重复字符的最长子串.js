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
var lengthOfLongestSubstring = function(s) {
    if(!s.length) return 0;

    let tempStr = '';   // 游标
    let maxLength = 0;
    let left = 0, right = 0; // 左游标位置
    for (let i = 0; i < s.length; i++ ){
        if (tempStr.indexOf(s[right]) > -1) {
            // console.warn(i, tempStr, s[right])
            // left的计算不能从s字符串开始计算，要通过原始值加上 tempStr只能够重复元素的下标
            left += tempStr.indexOf(s[right]) + 1;
            // console.log(left, right, s.substring(left, right+1));
        }
        right += 1;
        tempStr = s.substring(left, right);
        maxLength = Math.max(maxLength, tempStr.length);
    }

    return maxLength;

};
// test 
// console.log(lengthOfLongestSubstring('abcabcbb'));

// @lc code=end

