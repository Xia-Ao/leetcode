/*
 * @lc app=leetcode.cn id=1326 lang=javascript
 *
 * [1326] 灌溉花园的最少水龙头数目
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function (n, ranges) {

  // 贪心算法 区间问题
  // 先计算 ranges 每个水龙头能覆盖到的最大范围
  let rightMost = new Array(n + 1).fill(0).map(i => i);
  for (let i = 0; i < ranges.length; i++) {
    const start = Math.max(0, i - ranges[i]);
    const end = Math.min(n, i + ranges[i]);
    // start 位置 的水龙头最远能覆盖到位置
    rightMost[start] = Math.max(rightMost[start], end);
  }

  // 贪心策略
  let pre = 0;
  let last = 0;
  let count = 0;

  for (let i = 0; i < n; i++) {
    last = Math.max(rightMost[i], last)
    // console.log('pre', pre, 'last', last);
    if (i === pre) {
      pre = last;
      count++;
    }
    // 走到i的时候，已经和i处最远覆盖到的距离一样，则已经满足不了了
    if (i === last) {
      return -1;
    }
  }
  return count;

};
// @lc code=end

