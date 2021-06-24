/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let 

  /**
   * 左端排序: 列表按照左端数据排序，当左边的所有数据都比某一个右边左端数据小时，可以合并为一个区间
   */
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  console.log(intervals);

};


// @lc code=end

merge([[1,3],[2,6],[8,10],[15,18]]);