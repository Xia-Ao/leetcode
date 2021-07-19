/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {

  /**
   * 金典问题 动态规划
   * 1. 先简化问题
   * 两个单词，每个单词有三种操作，乍一看有六种操作。
   * 但是A插入一个和B删除一个，效果是一样的，所以等同为一种；同理 A插和B删效果等同
   * A替换一个和B替换一个也是一样，所以结论是，两个单词 总共也就三种操作，而不是六种。这样问题就简单了一点。
   * 
   * 2. 找出子问题
   * 如果 horse 到 ro 需要 n 步，则到ros只需要n+1就完成了 同理，B=>A一样。，替换也是同样的原理
   * 那么子问题就来了，horse到ros的编辑距离就是min(删除+1， 插入+1， 替换+1)
   * 
   * 3. 边界问题
   * 子问题一直拆分，一直到 A和B之间有一个为空，则编辑距离就是另一个不为空字符的长度。
   * 
   * 3. 状态转移方程
   * 我们用D[i, j] 来表示A前i个和B前j个的编辑距离，那么 D[i,j] = min(D[i-1,j], D[i,j-1])，
   * 如果A第i个和B第j个刚好相等，就不需要操作了，那么D[i,j] = D[i-1,j-1]; 因此：
   * 当最后一个字符相等时：
   * D[i,j] = 1 + min(D[i-1,j], D[i,j-1], D[i-1,j-1] -1)
   * 最后一个字符不相等时：
   * D[i,j] = 1+ min(D[i-1,j], D[i,j-1],D[i-1,j-1])
   * 边界：
   * D[i,0] = i; D[0,j] = j
   */

  const n = word1.length;
  const m = word2.length;

  // 初始化dp数组, 注意这里是n+1 m+1数组，因为要考虑字符串为空边界，所以相当于往前补了一个''
  const dp = new Array(n + 1).fill([]).map(item => new Array(m + 1).fill(0));


  // 边界初始化
  for (let i = 0; i <= n; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= m; j++) {
    dp[0][j] = j;
  }

  // 遍历计算
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      // if (word1.charAt(i-1) === word2.charAt(j-1)) {
      //   dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1] - 1);
      // } else {
      //   dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
      // }
      // 精简下代码
      let left_down = dp[i - 1][j - 1];
      // 如果最后一个字符相等，则left_down 不用+1，在这里做成减1
      if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
        left_down--;
      }
      dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], left_down)
    }
    // console.log(word1.charAt(i))
    // console.log(word1.charAt(i), i, dp)
  }
  return dp[n][m];
};
// @lc code=end
// minDistance('horse', 'ros');
