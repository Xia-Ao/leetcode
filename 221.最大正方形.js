/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 * 思路：动态规划
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (matrix.length === 0) {
    return 0;
  }
  let max = 0;
  // 初始化一个dp数组 
  let dp = new Array(matrix.length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(matrix[i].length).fill(0);
  }

  // 双层遍历循环
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === '1') {  
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1;
        }
        max = Math.max(max, dp[i][j])
      }
    }
  }

  return max * max

};

let temp = maximalSquare([['1']]);
console.log(temp);
// @lc code=end

