/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  /**
   * 对于有两个维度最优的场景，一般思路确定一个维度，另一个维度使用贪心
   */

  /**
   * 身高作为第一维度，k作为第二维度
   * 身高降序， 一样的身高 按照 k升序, 这样就保证了，同身高，顺序是对的，
   * 然后矮的往高的前面插，对高的不影响
   */
  people.sort((a, b) => {
    if (a[0] !== b[0]) return b[0] - a[0];
    return a[1] - b[1];
  })
  // console.log(people);

  const queue = [];
  for (let i = 0; i < people.length; i++) {
    queue.splice(people[i][1], 0, people[i])
  }
  return queue;
};
// @lc code=end

// reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]])