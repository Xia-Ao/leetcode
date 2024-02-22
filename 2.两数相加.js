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

    const newLink = new ListNode(0);
    let link = newLink;

    let carry = 0;
    while (l1 || l2 || carry) {
        let val = (l1?.val || 0) + (l2?.val || 0) + carry;
        if (val >= 10) {
            val = val % 10;
            carry = 1;
        } else {
            carry = 0;
        }

        link.next = new ListNode(val);
        link = link.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }
    return newLink.next;
};
// @lc code=end
