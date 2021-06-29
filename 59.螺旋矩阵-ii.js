/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {

  /**
   * 尝试按照一圈一圈来，定义四个方向，top right，bottom，left
   */
  const res = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let left = 0, right = n - 1, top = 0; bottom = n - 1;
  let num = 1; // 使用num计数表示

  while (left <= right && top <= bottom) {
    // top 
    for (let i = left; i <= right; i++) {
      res[top][i] = num;
      num++;
    }
    top++;

    // right
    for (let i = top; i <= bottom; i++) {
      res[i][right] = num;
      num++;
    }
    right--;

    // 因为上面top和right变化了，遍历另外两条边的时候，重新判断一下条件
    if (left <= right && top <= bottom) {
      // bottom
      for (let i = right; i >= left; i--) {
        res[bottom][i] = num;
        num++;
      }
      bottom--;

      // left
      for (let i = bottom; i >= top; i--) {
        res[i][left] = num;
        num++;
      }
      left++;
    }
  }

  return res;
};

// @lc code=end

