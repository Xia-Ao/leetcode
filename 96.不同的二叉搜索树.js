/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {

  /**
   * 动态规划 拆分子问题
   * 看图我们发现，n=3时，
   * 当1为根结点，23 在右边节点，有两种，刚好对应子节点n=2的结果
   * 当2为根结点 1 3 在左右，只有一种，刚好对应 子节点n=1的结果
   * 当3为根结点，同n=1
   * 因此，我们发现规律，结果等于根结点两边子节点结果相乘
   * f(i) 表示i为根节点时的结果， G(n)表示n个节点的结果
   * f(i) = G(i-1) * G(n-i)
   * 同时我们发现，所有f(i）的结果加起来 就是所有的结果
   * G(N) = f(1)+f(2)+...+f(n)
   * 
   * => G(n) = G(0)*G(n-1) + G(1)*G(n-2) + .. + G(n-1)*G(0)
   */

  // let f = new Array(n).fill(0);
  let G = new Array(n + 1).fill(0);
  G[0] = 1;
  G[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      G[i] += G[j - 1] * G[i - j];
    }
  }
  return G[n]
};
// @lc code=end

