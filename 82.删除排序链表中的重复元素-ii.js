/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head;

  // const newHead = new ListNode(-1, head);

  // let pre = newHead;
  // let cur = head;
  // let endFlag = false;

  // while (cur.next) {
  //   if (cur.val === cur.next.val) {
  //     cur.next = cur.next.next;
  //     endFlag = true;
  //   } else {
  //     if (endFlag) {
  //       // 当前也要删除
  //       pre.next = cur.next;
  //       cur = pre;
  //       endFlag = false;
  //     }
  //     pre = cur;
  //     cur = cur.next;
  //   }
  // }
  // if (endFlag) {
  //   pre.next = cur.next;
  // }
  // return newHead.next;

  // 精简写法 不保存pre 通过 cur.next 和cur.next.next判断
  const newHead = new ListNode(-1, head);
  let cur = newHead;
  while (cur.next && cur.next.next) {
    if(cur.next.val === cur.next.next.val){
      let x = cur.next.val;
      while (cur.next && cur.next.val === x){
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }
  return newHead.next;


  //  if (!head) {
  //       return head;
  //   }

  //   const dummy = new ListNode(0, head);

  //   let cur = dummy;
  //   while (cur.next && cur.next.next) {
  //       if (cur.next.val === cur.next.next.val) {
  //           const x = cur.next.val;
  //           while (cur.next && cur.next.val === x) {
  //               cur.next = cur.next.next;
  //           } 
  //       } else {
  //           cur = cur.next;
  //       }
  //   }
  //   return dummy.next;

};
// @lc code=end

