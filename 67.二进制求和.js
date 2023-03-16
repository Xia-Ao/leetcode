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
var addBinary = function (a, b) {
    a = a.split('');
    b = b.split('');
    let res = '';
    let add = 0;
    const step = 2;
    while (a.length || b.length) {
        let sum = add + Number(a.pop() || 0) + Number(b.pop() || 0);
        // 发生了进位
        if (sum >= step) {
            add = Math.floor(sum / step);
            sum = sum % step;
        } else {
            add = 0;
        }
        res = `${sum}${res}`;
    }
    if (add) {
        res = `${add}${res}`;
    }
    return res;
};
// @lc code=end
// addBinary("1111", "1111")
