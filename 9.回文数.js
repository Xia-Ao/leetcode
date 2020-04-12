/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // 方法一：
    if (x < 0) {
        return false
    }
    let str = x.toString();
    let length = str.length;
    let i = 0;
    // console.log(str, length);
    while (i < (length >> 1)) {
        // console.log(i, str[i], str[length - i-1])
        if (str[i] !== str[length - i - 1]) {
            return false
        }
        i++;
    }
    return true;

    // 方法二： 将数反过来再对数进行比较
    // if (x < 0) return false
    // let rev = 0
    // for (let i = x; i >= 1; i = Math.floor(i / 10))
    //     rev = rev * 10 + i % 10
    // return rev === x

};
// console.log(isPalindrome(12-21));
// @lc code=end

