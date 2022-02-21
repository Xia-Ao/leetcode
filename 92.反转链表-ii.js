/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (left === right) return head;

  let newHead = new ListNode(null, head);
  let pre = newHead;

  // 1 先找到left node
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }

  // 2 找到right node
  let rightNode = pre.next;
  for (let i = 0; i < right - left; i++) {
    console.log('i--', i);
    rightNode = rightNode.next;
  }

  // 3 切割子链表
  let leftNode = pre.next; // 定义leftNode， pre是左边剩余部分暂存
  let last = rightNode.next; // 右边剩余部分 暂存
  // 切断连接
  pre.next = null;
  rightNode.next = null;


  // 4 反转子链表
  function revertLink(node) {
    let currentNode = node;
    let preNode = null;
    while (currentNode) {
      let temp = currentNode.next; // 暂存之后的节点
      currentNode.next = preNode; // 当前节点的next指向 反转的pre
      preNode = currentNode; // 反转的preNode 指向当前节点 pre就增加一个
      currentNode = temp; // 当前节点下移下一个节点
    }
    return preNode;
  }
  revertLink(leftNode); // 引用对象，不用赋值

  // 5 将子链表拼接到原链表
  // 反转之后链表left right 变了
  pre.next = rightNode;
  leftNode.next = last;

  return newHead.next;

};
// @lc code=end

