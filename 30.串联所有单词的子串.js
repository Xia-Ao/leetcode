/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {

  const wordNum = words[0].length;
  const len = wordNum * words.length;
  const res = [];
  for (let i = 0; i <= s.length - len; i++) {
    // const cur = s.slice(i, i + wordNum);
    let has = true;
    let j = 0;
    let temp = [...words];
    while (j < words.length) {
      const index = i + j * wordNum;
      // console.log('index', i);
      // 这里不能用包含，因为每一个都需要用到
      let k = temp.indexOf(s.slice(index, index + wordNum));
      if (k > -1) {
        temp.splice(k, 1);
      } else {
        has = false;
        break;
      }
      // console.log('temp', i, temp, k);
      j++;
    }
    if (has) {
      res.push(i);
    }
  }
  // console.log(res);
  return res;
};
// @lc code=end

// findSubstring("wordgoodgoodgoodbestword"
//   , ["word", "good", "best", "good"])