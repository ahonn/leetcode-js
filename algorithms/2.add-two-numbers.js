/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (30.73%)
 * Total Accepted:    804.6K
 * Total Submissions: 2.6M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 *
 * Example:
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const addTwoNumbers = function addTwoNumbers(l1, l2) {
  const list = new ListNode();
  let current = list;
  let val = 0;

  while (l1 || l2 || val) {
    if (l1 !== null) {
      val += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      val += l2.val;
      l2 = l2.next;
    }

    current.next = new ListNode(val % 10);
    current = current.next;

    val = val > 9 ? 1 : 0;
  }
  return list.next;
};
