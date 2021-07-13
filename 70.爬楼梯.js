/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

  /**
   * 
   * 状态转移方程: f(n) = f(n-1) + f(n-2)
   * 边界 f(1) = 1; f(2) = 2;
   * 使用字典记录
   */
  // let f = new Array(n).fill(0);
  if (n === 1) return 1;
  if (n === 2) return 2;
  let a = 1;
  let b = 2;
  let temp = 0;
  for (let i = 3; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return temp;

};
// @lc code=end

