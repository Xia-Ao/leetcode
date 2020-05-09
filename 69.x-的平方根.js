/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if(x < 2 ) {
    return x
  }
  let left = 1, right = x >> 1;
  while (left + 1 < right) {
    let mid = left + ((right-left) >> 1);
    if(mid === x/mid) {
      return mid;
    } else if (mid < x/mid) {
      left = mid;
    } else {
      right = mid;
    }
  } 

  return right > x / right ? left : right;

};
// @lc code=end

