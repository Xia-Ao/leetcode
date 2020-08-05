/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // 找到最长的字符串，短的用0补全
    const maxLen = Math.max(a.length, b.length);
    a = a.padStart(maxLen, '0');
    b = b.padStart(maxLen, '0');
    // 从字符串最后一位开始遍历， 进行位运算
    let str = ''
    for(let i = maxLen -1; i >= 0; i--) {
      
    }


};
// @lc code=end

