/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/* *
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
  // 1 队列
  // if (!root) return [];
  //   const res: number[][] = [];
  //   const queen = [root];
  //   while (queen.length) {
  //     let c: number[] = [];
  //     const len = queen.length;
  //     for (let i = 0; i < len; i++) {
  //       const node = queen.shift();
  //       c.push(node.val);
  //       if (node.left) queen.push(node.left);
  //       if (node.right) queen.push(node.right);
  //     }
  //     res.push(c);
  //     c = [];
  //   }
  //   return res;

  // 2 depth
  function bfs(node: TreeNode | null, depth: number, res) {
    if (!node) return res;
    if (res[depth] === undefined) {
      res[depth] = [];
    }
    res[depth].push(node.val);
    bfs(node.left, depth + 1, res);
    bfs(node.right, depth + 1, res);
    return res;
  }
  return bfs(root, 0, []);
}
// @lc code=end
