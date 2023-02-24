/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  // 方法一， 将每一个都当作起点遍历，直到找到合适的
  let len = gas.length;

  // if (gas.reduce((a, b) => a + b) < cost.reduce((a, b) => a + b)) return -1;

  // for (let i = 0; i < len; i++) {
  //   let cur = 0;
  //   for (let j = i; j < len + i; j++) {

  //     const index = j >= len ? j - len : j;
  //     cur += gas[index];

  //     if (cur < cost[index]) break;
  //     if (j + 1 === i + len) {
  //       return i;
  //     }
  //     // 减去消耗
  //     cur -= cost[index];

  //   }
  // }
  // return -1;


  // 方法二 贪心
  let start = 0;
  let rest = 0;
  let run = 0

  for (let i = 0; i < len; i++) {
    // 剩余油量一直在计
    rest += gas[i] - cost[i];
    // 计算这一段的 消耗
    run += gas[i] - cost[i];

    if (run < 0) {
      start = i + 1;
      run = 0;
    }
  }
  return rest < 0 ? -1 : start;

};
// @lc code=end

// console.log('res', canCompleteCircuit([1, 1, 1, 1, 1], [1, 1, 1, 1, 1]))