/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 这个题目的本质就是让自己手动实现加法运算的过程
 */
var addTwoNumbers = function (l1, l2) {
    let newList = new ListNode(null);
    let cur = newList;

    let add = 0;
    while (l1 || l2) {
        let n1 = l1 ? l1.val : 0;
        let n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + add;
        add = Math.floor(sum / 10);
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
        if (l1)
            l1 = l1.next;
        if (l2)
            l2 = l2.next;
    }
    // 剩余的进位
    if (add > 0) {
        cur.next = new ListNode(add)
    }
    return newList.next;
};
// @lc code=end
