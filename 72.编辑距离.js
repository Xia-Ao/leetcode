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
var minDistance = function(word1, word2) {

  /**
   * 金典问题 动态规划
   * 1. 先简化问题
   * 两个单词，每个单词有三种操作，乍一看有六种操作。
   * 但是A插入一个和B删除一个，效果是一样的，所以等同为一种；同理 A插和B删效果等同
   * A替换一个和B替换一个也是一样，所以结论是，两个单词 总共也就三种操作，而不是六种。这样问题就简单了一点。
   * 
   * 2. 找出子问题
   * 如果 horse 到 ro需要 n步，则到ros只需要n+1就完成了 同理，B=>A一样。，替换也是同样的原理
   * 那么子问题就来了，下一步
   */

};
// @lc code=end

