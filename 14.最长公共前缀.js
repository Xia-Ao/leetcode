/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let resStr = ''
    if (!Array.isArray(strs) || strs.length <= 0) {
        return resStr;
    }
    // 遍历
    let firstStr = strs[0];
    console.log(firstStr);
    for (let j = 0; j < firstStr.length; j++) {
        let value = firstStr[j];
        // console.log('外', value);
        for (let i = 0; i < strs.length; i++) {
            // console.log('内', strs[i][j])
            if (value !== strs[i][j]) {
                return resStr;
            }
        }
        resStr += firstStr[j];
    }
    return resStr;
};

// console.log(longestCommonPrefix(["flower", "flow", "floight"]));
// @lc code=end

