/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const row = {};
  const column = {};
  const grid = {};

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const cur = board[i][j];
      if (cur === '.') continue;
      // 判断row
      if (!row[i]) {
        row[i] = {};
      }
      if (row[i][cur] !== undefined) {
        // console.log('row', 'i', i, 'j', j, 'cur', cur, row)
        return false;
      } else {
        row[i][cur] = cur;
      }

      // 判断column
      if (!column[j]) {
        column[j] = {};
      }
      if (column[j][cur] !== undefined) {
        // console.log('column', 'i', i, 'j', j, 'cur', cur, column[j][cur])
        return false;
      } else {
        column[j][cur] = cur;
      }

      // 判断grid
      const key = `${Math.ceil((i + 1) / 3)}-${Math.ceil((j + 1) / 3)}`;
      if (!grid[key]) {
        grid[key] = {};
      }
      if (grid[key][cur] !== undefined) {
        // console.log('grid', 'i', i, 'j', j, 'cur', cur, key, grid[key])
        return false;
      } else {
        grid[key][cur] = cur;
      }

    }
  }
  return true;
};
// @lc code=end

