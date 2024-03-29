/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {

  /**
   * 合并区间一样的做法
   * let merge = newInterval; 
   * 定义两个指针
   * 排除边界情况，数组为0 或者merge 在数组的最左边和最右边的情况
   * 遍历数组，比较merge[1]和item[0]
   * if merge[1] < item[0] 则遍历结束，right是item的下标 ，需要处理下left的边界情况
   * merge[1] >= item[0]，找到了对应区间，merge[0]先取两个数据左边值的最小值，merge[1]取两个数据的右边最大值，
   * 然后一直遍历，触发遍历结束条件
   *  
   * 最后使用
   * 
   */
  let res = intervals;
  let left = null;
  let right = null;
  let merge = newInterval;

  // 边界情况 数组为空 或者 在最左边
  if (intervals.length === 0 || merge[1] < intervals[0][0]) {
    intervals.unshift(merge);
    return intervals
  }

  // 边界情况 merge在最右边
  if (merge[0] > intervals[intervals.length - 1][1]) {
    intervals.push(merge);
    return intervals
  }

  let i = 0;
  // 跳出遍历条件 intervals[i] 不存在 或者item[0] > merge[1], 后面的item都会大于merge, 所以遍历结束
  while (intervals[i] && merge[1] >= intervals[i][0]) {
    // 如果目标值的左值小于或等于原数据的右值，则找到区间位置, 替换merge[0] merge[1]的值
    if (newInterval[0] <= intervals[i][1]) {
      // 如果left有过标记，则不需要修改指针
      if (typeof left !== 'number') {
        left = i;
      }
      merge[0] = Math.min(merge[0], intervals[i][0]);
      merge[1] = Math.max(newInterval[1], intervals[i][1]);
    }
    i++;
  }

  right = i; // 遍历结束，右指针指到当前index
  // 边界情况 遍历结束的时候，如果左指针还没赋值的话，表示不需要合并，直接在当前index处插入
  if (typeof left !== 'number') {
    left = i;
  }

  // console.log('merge:', merge, left, right)

  intervals.splice(left, right - left, merge);
  return intervals;
};
// @lc code=end

