/*
 * @lc app=leetcode.cn id=140 lang=javascript
 *
 * [140] 单词拆分 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const n = s.length;
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;
  const res = {};
  // 和上一道的区别是， 需要返回所有结果，判断逻辑是一致的，关键在如何存储结果
  // 遍历 检查 dp[i] 和s[i,j]是否在wordDict中，如果是，则dp[j]直接为true
  // 因为dp 默认false，所以再从dp[i]找到最近的dp[j], 再继续
  for (let i = 0; i <= n; i++) {
    res[i] = '';
    // console.log('i--', i)
    for (let j = i + 1; j <= n; j++) {
      if (dp[i] && wordDict.includes(s.slice(i, j))) {
        dp[j] = true;
        let lastIndex= j
        // if (i in res) {
        //   res[j] = `${res[i]} ${s.slice(i, j)}`;
        //   // delete res[i];
        // } else {
        //   res[j] = s.slice(i, j)
        // }
        console.log(s.slice(i, j), i, j);
      }
    }
    // console.log(s);
    // if (s) res.push(s);
  }

  return Object.values(res).filter(v => v);
  // console.log(dp);
};
wordBreak('catsanddog', ["cat", "cats", "and", "sand", "dog"])
// @lc code=end

