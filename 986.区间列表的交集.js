/*
 * @lc app=leetcode.cn id=986 lang=javascript
 *
 * [986] 区间列表的交集
 */

// @lc code=start
/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  /**
   * 双指针
   * fi 指向 firstList 比较的位置
   * si 指向 secondList 比较的位置
   * 然后对 firstList[fi] secondList[si] 取交集，同时移动指针。
   */
  let fi = 0;
  let si = 0;
  let res = [];
  while (fi < firstList.length && si < secondList.length) {
    let f = firstList[fi];
    let s = secondList[si];
    if (f[0] > s[s.length - 1]) {
      si++;
    } else if (f[f.length - 1] < s[0]) {
      fi++;
    } else {
      let MaxLeft = Math.max(f[0], s[0]);
      let minRight = Math.min(f[f.length - 1], s[s.length - 1]);
      res.push([MaxLeft, minRight]);
      if (f[f.length - 1] < s[s.length - 1]) {
        fi++;
      } else if (f[f.length - 1] > s[s.length - 1]) {
        si++;
      } else {
        fi++;
        si++;
      }
    }
  };
  return res;
}
// @lc code=end

// intervalIntersection([[0, 2], [5, 10], [13, 23], [24, 25]], [[1, 5], [8, 12], [15, 24], [25, 26]])