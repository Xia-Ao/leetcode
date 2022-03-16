/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // 方法1: 前序遍历 
  // 通过一个变量depth标识 二叉树深度，也就数组的length， 然后按照前序遍历，在同一深度将值push进去即可
  let res = [];
  pre(root, 0, res);
  return res;

  function pre(root, depth, res) {
    if (!root) return;
    // 对res扩容
    if (depth >= res.length) {
      res.push([]);
    }
    res[depth].push(root.val);
    pre(root.left, depth + 1, res);
    pre(root.right, depth + 1, res);
  }

  // 方法二： 队列思想
  // let res = [];
  // if (!root) return res;

  // let q = []; // 队列，用来存储节点
  // q.push(root);
  // while (q.length) {
  //   res.push([]);
  //   let len = q.length;
  //   for (let i = 0; i < len; i++) {
  //     let node = q.shift();
  //     res[res.length - 1].push(node.val);
  //     if (node.left) q.push(node.left);
  //     if (node.right) q.push(node.right);
  //   }
  // }

  // return res;


};
// @lc code=end

