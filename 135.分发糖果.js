/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let len = ratings.length;

  // 初始化 让每一个孩子都有一个糖果
  let res = new Array(len).fill(1);

  // 两次不同方向上的遍历， 保证相邻孩子评分高的孩子多一个
  for (let i = 0; i < len - 1; i++) {
    if (ratings[i] < ratings[i + 1]) {
      res[i + 1] = res[i] + 1;
    }
  }
  // console.log('res1', res);
  for (let j = len - 1; j > 0; j--) {
    // 反过来遍历的时候，不能清除之前的值，只有糖果数量少于邻居才需要+1
    if (ratings[j - 1] > ratings[j] && res[j - 1] <= res[j]) {
      res[j - 1] = res[j] + 1;
    }
  }
  // console.log('res2', res);
  return res.reduce((a, b) => a + b);
};
// @lc code=end
// candy([1, 3, 4, 5, 2]);