/*
 * @lc app=leetcode.cn id=116 lang=typescript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: _Node | null): _Node | null {
  if (!root) return null;
  const queen: _Node[] = [root];
  while (queen.length) {
    const len = queen.length;
    for (let i = 0; i < len; i++) {
      const node = queen.shift();
      if (i < len - 1) {
        node.next = queen[0];
      } else {
        node.next = null;
      }
      node.left && queen.push(node.left);
      node.right && queen.push(node.right);
    }
  }
  return root;
}
// @lc code=end
