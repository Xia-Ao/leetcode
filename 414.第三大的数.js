/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    // 处理小于3的
    nums = [...new Set(nums)];
    if(nums.length < 3) {
        return Math.max(...nums)
    }

    let orderNums = nums.sort((a,b) => a-b);
    return orderNums[orderNums.length - 3];
};

console.log(thirdMax([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6]));
// @lc code=end

