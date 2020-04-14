/*
 * @lc app=leetcode.cn id=400 lang=javascript
 *
 * [400] 第N个数字
 * 
 * 规律： 
 * 1-9 9个数，9x1位数字
 * 10-99  90个数， 90 x 2 位数字
 * 100-999 900个数， 900 x 3位数
 * 
 * 因此步骤为： 
 * 1、 先找到这个数字对应的是几位数，按照上面9x1 90x2 900x3 区间找
 * 2、确定这个位置的这个数值是多少
 * 3，确定这个位置的对应这个数字的哪一位，就是我们最后对应的位置
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let base = 9;   // 区间
    let digist = 1; // 位数
    // 1、计算出对应的位数和区间
    while (n- base * digist > 0) {
        n -= base * digist;
        base *= 10;
        digist++;
    }
    // 2、确定对应的数值 通过对应的区间数 + 计算出来的在该区间中的第几个数
    let a = parseInt(n/digist) + (n%digist > 0 ? 1 : 0); 
    let number = Math.pow(10, digist-1) - 1 + a;

    // 3、确定数字中对应的位置下标
    let numStr = number.toString();
    let index = 0;
    if(n > digist) {
        index = n%digist === 0 ? digist : n%digist;
    } else {
        index = n;
    }
    console.log(n,base, digist,a, number, index);
    

    return Number(numStr[index-1]);

};

console.log(findNthDigit(365));
// @lc code=end

