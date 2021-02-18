/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];
  // start是当前选择的起点索引 temp是当前的集合 sum是当前求和
  const dfs = (start, temp, sum) => {
    // 约束条件， 由于都是正数，当当前sum已经大于target时，就可以结束dfs
    if (sum >= target) {
      if (sum === target) {
        res.push(temp.slice());
      }
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      temp.push(candidates[i]);
      dfs(i, temp, sum + candidates[i]); // 基于此继续选择，传i，下一次就不会选到i左边的数
      temp.pop(); // 撤销选择，回到选择candidates[i]之前的状态，继续尝试选同层右边的数
    }
  }
  dfs(0, [], 0);
  return res;

};
// @lc code=end

