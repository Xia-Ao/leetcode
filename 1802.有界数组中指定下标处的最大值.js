/*
 * @lc app=leetcode.cn id=1802 lang=javascript
 *
 * [1802] 有界数组中指定下标处的最大值
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function (n, index, maxSum) {
  // 贪心+ 二分
  let left = 1;
  let right = maxSum;
  while (left < right) {
    // 向下取整了，所以这里多加1
    const mid = (left + right + 1) >> 1;
    if (validate(mid, n, index, maxSum)) {
      left = mid;
      // console.log('left = mid', left)
    } else {
      right = mid - 1;
      // console.log('right = mid', right)
    }
  }
  // console.log('res', left);
  return left;


  //  判断是否满足条件
  function validate(mid, n, index, maxSum) {
    const left = index;
    const right = n - index - 1;
    // console.log('mid', mid, left, right);
    // if (mid === 7) {
    //   console.log(',',calSum(mid, left), calSum(mid, right))
    // }
    return mid + calSum(mid, left) + calSum(mid, right) <= maxSum;
  }

  /**
   * 计算最大为big-1 长度为len， 相邻元素最大相差1的所有元素 sum
   * @param {*} big  
   * @param {*} len 
   * 相差1 求和公式 (big+small)*len /2
   */
  function calSum(big, len) {
    // 按照1的相差，还不够big 则 数组为 big ... big-len
    if (len + 1 < big) {
      const small = big - len;
      return Math.floor(((big - 1) + small) * len / 2);
    } else {
      // 部分相差1 ，剩余的都是1
      const ones = len - (big - 1);
      return ones + Math.floor((big - 1) * (big) / 2)
    }
  }
};
// @lc code=end
// maxValue(7, 5, 30);
