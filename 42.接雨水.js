/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {

  // 自己尝试
  // 中间法，找到最高的，然后分开向两边查找第二高的，计算第二高的和最高之前装的水，
  // 然后再以第二高的，向更低的方向查找，直到0

  // 1. 获取中间值
  const maxHeight = Math.max(...height);
  const maxIndex = height.indexOf(maxHeight);

  function recursionL(maxIndex, end, sum) {
    console.log('recursion', maxIndex, end, sum);
    let max = 0;
    let index = maxIndex;
    // 向左
    for (let i = maxIndex - 1; i >= end; i--) {
      if (height[i] > max) {
        max = height[i];
        index = i;
      }
    }
    // 计算值
    for (let i = maxIndex - 1; i >= index; i--) {
      sum += max - height[i];
    }
    if (maxIndex <= 0 || max === 0) return sum;
    return recursionL(index, end, sum)
  };
  function recursionR(maxIndex, end, sum) {
    console.log('recursion', maxIndex, end, sum);
    let max = 0;
    let index = maxIndex;
    // 表示向右

    let i = maxIndex + 1;
    for (let i = maxIndex + 1; i < end; i++) {
      if (height[i] > max) {
        max = height[i];
        index = i;
      }
    }
    if (maxIndex >= end - 1 || max === 0) {
      console.log('return', sum);
      return sum;
    }
    // 计算值
    for (let i = maxIndex + 1; i <= index; i++) {
      sum += max - height[i];
    }
    return recursionR(index, end, sum);
  };
  const res1 = recursionL(maxIndex, 0, 0);
  const res2 = recursionR(maxIndex, height.length, 0);
  // const res2 = 0;
  console.log(res1 + res2)
  return res1 + res2;
}
// @lc code=end

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
// trap([0, 2, 0]);
