/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 *
 * https://leetcode.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (35.47%)
 * Total Accepted:    237.7K
 * Total Submissions: 670.2K
 * Testcase Example:  '[1,2]'
 *
 * Given a singly linked list, determine if it is a palindrome.
 *
 * Example 1:
 *
 * Input: 1->2
 * Output: false
 *
 * Example 2:
 *
 * Input: 1->2->2->1
 * Output: true
 *
 * Follow up:
 * Could you do it in O(n) time and O(1) space?
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function isPalindrome(head) {
  const stack = [];
  let current = head;

  while (current) {
    stack.push(current.val);
    current = current.next;
  }

  current = head;
  const halfStackLen = stack.length >> 1;
  for (let i = 0; i < halfStackLen; i += 1) {
    if (current.val !== stack.pop()) {
      return false;
    }
    current = current.next;
  }

  return true;
};
