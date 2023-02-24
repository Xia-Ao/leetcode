/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {

  if (!s.length) return '';
  // 创建一个栈
  let stack = [s[0]];
  for (let i = 1; i < s.length; i++) {
    // 如果该值在栈里面已有，下一个
    if (stack.includes(s[i])) {
      continue;
    }
    // 判断 当前值 是否小于 栈顶 ，并且栈顶的值在后面是否还有，有的话，则出栈
    while (stack.length && s[i].charCodeAt() < stack[stack.length - 1].charCodeAt() && s.slice(i).indexOf(stack[stack.length - 1]) > -1) {
      stack.pop();
    }
    // 其他情况 入栈
    stack.push(s[i]);

  }
  // console.log('---stack', stack, );
  return stack.join('');
};
// @lc code=end

// removeDuplicateLetters('ecbacba');

