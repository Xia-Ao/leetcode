/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    //1、 数学方法 
    // while(n>=3) {
    //     n /= 3
    // }
    // return n === 1;

    // 2、 进制
    return /^10*$/.test(n.toString(3));


};
// @lc code=end

