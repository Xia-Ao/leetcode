/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 * 暴力法 O(n*n)
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {

  /**
   * 动态规划  时间O(n)
   * 每一次的底是固定的，先从两条边开始，往中间靠, 每次靠拢的时候，短的边是比较亏的，所以移动短边
   * 
   * 讨论： 对O(n)的算法写一下自己的理解，一开始两个指针一个指向开头一个指向结尾，此时容器的底是最大的，接下来随着指针向内移动，会造成容器的底变小，在这种情况下想要让容器盛水变多，就只有在容器的高上下功夫。 那我们该如何决策哪个指针移动呢？我们能够发现不管是左指针向右移动一位，还是右指针向左移动一位，容器的底都是一样的，都比原来减少了 1。这种情况下我们想要让指针移动后的容器面积增大，就要使移动后的容器的高尽量大，所以我们选择指针所指的高较小的那个指针进行移动，这样我们就保留了容器较高的那条边，放弃了较小的那条边，以获得有更高的边的机会。
   */

  let max = 0;
  let i = 0, j = height.length - 1;
  while (j > i) {
    max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }
  return max;
};

// maxArea([1,8,6,2,5,4,8,3,7]);
// @lc code=end

