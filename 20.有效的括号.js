/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // if (!s.length) return false;
  if(s.length % 2 === 1) return false;
  s = s.replace(/\s+/, '');
  // 这个地方使用map对象存储数据是不错的方法
  const map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ])

  // 使用栈的思想，左括号先入栈，检测到右括号，与栈里面的左括号对比
  const stack = [];
  s.split('').forEach(val => {
    if (map.has(val)) {
      if (!stack.length || stack[stack.length - 1] !== map.get(val)) return false;
      stack.pop();
    } else {
      stack.push(val);
    }
  });

  return !stack.length;
};
// @lc code=end

