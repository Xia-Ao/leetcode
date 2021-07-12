/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {

  /**
   * 反推，因为只能向右向下，所以位置dp[i, j]一定是从上方或者左边来的
   * 边界条件就是上方和左边 是不是 最最边上
   * 
   * 状态转移方程 dp[i,j] 表示(i,j)位置最小的路径和，grid[i,j]表示当前路径数值。
   * 当i=0,j=0, dp[i, j] = grid[i,j];
   * 当i=0,j!=0, dp[i, j] = dp[i,j-1] + grid[i,j];
   * 当i!=0,j=0, dp[i,j] = dp[i-1, j] + grid[i,j];
   * 当i!=0, j!=0, dp[i,j] = min(dp[i-1, j], dp[i, j-1]) + gird[i,j];
   * 因此我们实现代码如下
   */

  // let dp = new Array(grid.length).fill([]).map((item) => new Array(grid[0].length).fill(0));
  // 实际上，我们可以使用grid来存储之前计算好的值，因为grid之前的原值已经不用了

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i === 0 && j === 0) {
        continue;
        // dp[i][j] = grid[i][j];
      } else if (i === 0 && j !== 0) {
        grid[i][j] = grid[i][j - 1] + grid[i][j];
      } else if (i !== 0 && j === 0) {
        grid[i][j] = grid[i - 1][j] + grid[i][j];
      } else {
        grid[i][j] = Math.min(grid[i][j - 1], grid[i - 1][j]) + grid[i][j]
      }
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];

};

// console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));
// @lc code=end

