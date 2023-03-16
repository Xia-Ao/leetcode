/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  /**
   * 栈 的思想
   */
  const stack = [];
  path = path.split('/').filter(p => p.length > 0);

  while (path.length) {
    const cur = path.shift();
    if (cur === '.') continue;
    if (cur === '..') {
      stack.pop();
      continue;
    };
    stack.push(cur);
  }

  return `/${stack.join('/')}`;
};
// @lc code=end

// console.log(simplifyPath('/a/./b/../../c/'));