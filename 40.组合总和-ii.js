/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = [];

  const isEqualArray = (a, b) => {
    const res = a.length === b.length && a.sort().toString() === b.sort().toString();
    return res;
    // 或者通过filter和include组合
  }

  // start是当前选择的起点索引 temp是当前的集合 sum是当前求和
  const dfs = (start, temp, sum) => {
    // 约束条件， 由于都是正数，当当前sum已经大于target时，就可以结束dfs
    if (sum >= target) {
      if (sum === target) {
        if (res.length === 0) {
          res.push(temp.slice());
        } else {
          // 剔除重复组合 判断两个数组内容是否一样
          for (let j = 0; j < res.length; j++) {
            // console.log(j, res[j], temp, res.length);
            if (isEqualArray(res[j], temp)) return;
          }
          res.push(temp.slice());
          return;
        }
      }
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      temp.push(candidates[i]);
      dfs(i + 1, temp, sum + candidates[i]); // 基于此继续选择，传i，下一次就不会选到i左边的数
      temp.pop(); // 撤销选择，回到选择candidates[i]之前的状态，继续尝试选同层右边的数
    }
  }
  dfs(0, [], 0);
  // console.log('res', res);
  return res;

};

// combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)
// @lc code=end

