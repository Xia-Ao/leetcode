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
var addTwoNumbers = function(l1, l2) {
    let node = new ListNode('null');
    let n = 0, sum, temp = node;
    while(l1 || l2) {
        let n1 = l1 ? l1.val : 0; 
        let n2 = l2 ? l2.val : 0; 
        sum = n1 + n2 + n;
        temp.next  = new ListNode(sum % 10);
        temp = temp.next;
        n = parseInt(sum/10); // 每次进位的余数

        // 链表向后一位
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;

    }
    // 处理之前可能存在的进位
    if (n > 0 ) temp.next = new ListNode(n);
    return node.next;
};
// @lc code=end
