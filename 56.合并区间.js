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

  /**
   * 左端排序: 列表按照左端数据排序，
   * 创建一个merge数组，先取第一个
   * 用merge数字依次和其他数据对比，当被比较数据左端值小于merge数组的最大值，merge数组的右端值取取两个右端的最大值，
   * 一直到merge数组的右端数据小于被比较的左端数据，此时merge为一个合并区间，开始下一个merge遍历
   */
  intervals = intervals.sort((a, b) => a[0] - b[0]);

  let res = [];

  let merge = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    // merge右端值小于比较的左端，输出一个区间，采用新的merge
    if (merge[1] < intervals[i][0]) {
      res.push(merge);
      merge = intervals[i];
    } else {
      // 否则合并最大值
      merge[1] = Math.max(merge[1], intervals[i][1]);
    }
  }
  // 将最后一个也push进来
  res.push(merge);

  return res;
};


// @lc code=end

merge([[1, 3], [2, 6], [8, 10], [15, 18]]);