/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 *
 * https://leetcode.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (33.31%)
 * Total Accepted:    395.1K
 * Total Submissions: 1.1M
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * Merge k sorted linked lists and return it as one sorted list. Analyze and
 * describe its complexity.
 *
 * Example:
 *
 * Input:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * Output: 1->1->2->3->4->4->5->6
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function mergeKLists(lists) {
  if (lists.length === 0) {
    return null;
  }

  const merge2Lists = (l1, l2) => {
    if (l1 === null) {
      return l2;
    }
    if (l2 === null) {
      return l1;
    }

    if (l1.val <= l2.val) {
      l1.next = merge2Lists(l1.next, l2);
      return l1;
    }
    l2.next = merge2Lists(l1, l2.next);
    return l2;
  };

  while (lists.length > 1) {
    lists.push(merge2Lists(lists.shift(), lists.shift()));
  }
  return lists.shift();
};
