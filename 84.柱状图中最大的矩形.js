/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  heights.push(0); // 右边补0
  let stack = [0];
  let maxArea = heights[0];
  for (let i = 1; i < heights.length; i++) {
    // console.log('stack', 'i', i, 'v', heights[i], stack, maxArea)
    // 如果是递增的
    if (heights[i] >= heights[i - 1]) {
      stack.push(i);
    } else {
      let maxHeightIndex;
      while (heights[stack[stack.length - 1]] > heights[i]) {
        maxHeightIndex = stack.pop();
        // console.log('maxHeightIndex', maxHeightIndex, heights[maxHeightIndex])
        maxArea = Math.max(maxArea, heights[maxHeightIndex] * (i - maxHeightIndex));
      }
      // 如果 高度是0 直接清空stack
      if (heights[i] === 0) {
        stack = [];
      } else {
        // 这里十分关键 否则 用stack中最小的height index 入栈，同时将最小的height index 对应的height 改为 height[i], 方便下一次计算
        stack.push(maxHeightIndex);
        heights[maxHeightIndex] = heights[i];
      }
    }
  }
  // console.log('res', maxArea);
  return maxArea;
};
// @lc code=end

// largestRectangleArea([2, 1, 2]);