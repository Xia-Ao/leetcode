/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {

  intervals.sort((a, b) => a[1] - b[1]);
  let len = intervals.length;
  // console.log(intervals);

  let pre = intervals[0];
  let count = 1;
  for (let i = 1; i < len; i++) {
    let last = intervals[i];
    // 如果满足不重叠，则 保留
    if (pre[1] <= last[0]) {
      count++;
      pre = last;
    }
  }
  return len - count;

};
// @lc code=end
// eraseOverlapIntervals([[-52, 31], [-73, -26], [82, 97], [-65, -11], [-62, -49], [95, 99], [58, 95], [-31, 49], [66, 98], [-63, 2], [30, 47], [-40, -26]]);
