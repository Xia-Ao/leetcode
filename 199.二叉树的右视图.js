/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {

  /**
   * tree很好的DFS BFS的例子
   * DFS 每次优先遍历右边，则每层 第一个访问的就是最右边的节点
   * BFS 每层最后一个就是最右边的
   */

  // DFS
  // const res = [];
  // function dfs(root, depth) {
  //   if (root === null) return

  //   if (depth === res.length) {
  //     res.push(root.val);
  //   }

  //   depth++;
  //   // 先访问右边, 保证是最右边节点先访问
  //   if (root.right) {
  //     dfs(root.right, depth)
  //   }
  //   if (root.left) {
  //     dfs(root.left, depth)
  //   }
  // }
  // dfs(root, 0);
  // return res;

  // BFS 层序遍历，每一次把一层放到一个队列中
  const res = [];
  if(!root) {
    return res;
  }
  // 每一次
  const queen = [root];

  while (queen.length) {
    const len = queen.length;
    for (let i = 0; i < len; i++) {
      const node = queen.shift();
      if (node === null) {
        return;
      }
      // 放入 下一层
      if (node.left) {
        queen.push(node.left);
      }
      if (node.right) {
        queen.push(node.right);
      }
      if (i == len - 1) {
        res.push(node.val)
      }
    }
  }
  return res;

};
// @lc code=end

