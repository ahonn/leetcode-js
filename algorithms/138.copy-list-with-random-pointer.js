/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 *
 * https://leetcode.com/problems/copy-list-with-random-pointer/description/
 *
 * algorithms
 * Medium (26.03%)
 * Total Accepted:    317.5K
 * Total Submissions: 1M
 * Testcase Example:  '{"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}'
 *
 * A linked list is given such that each node contains an additional random
 * pointer which could point to any node in the list or null.
 *
 * Return a deep copy of the list.
 *
 * Example 1:
 *
 * Input:
 *
 * {"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}
 *
 * Explanation:
 * Node 1's value is 1, both of its next and random pointer points to Node 2.
 * Node 2's value is 2, its next pointer points to null and its random pointer
 * points to itself.
 *
 * Note:
 *
 * You must return the copy of the given head as a reference to the cloned
 * list.
 */
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = function copyRandomList(head) {
  if (head === null) {
    return null;
  }

  // A -> B -> C ==> A -> Acopy -> B -> Bcopy -> C -> Ccopy
  let cur = head;
  while (cur) {
    const copy = { val: cur.val, next: null, random: null };
    copy.next = cur.next;
    cur.next = copy;
    cur = copy.next;
  }

  // copy random ref
  cur = head;
  while (cur) {
    if (cur.random) {
      cur.next.random = cur.random.next;
    }
    cur = cur.next.next;
  }

  // A -> Acopy -> B -> Bcopy -> C -> Ccopy ==> ACopy -> BCopy -> CCopy
  cur = head;
  const res = cur.next;
  while (cur) {
    const copy = cur.next;
    cur.next = copy.next;
    if (copy.next) {
      copy.next = copy.next.next;
    }
    cur = cur.next;
  }

  return res;
};
