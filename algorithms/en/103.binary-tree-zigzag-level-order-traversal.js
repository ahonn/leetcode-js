/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (40.72%)
 * Total Accepted:    261.6K
 * Total Submissions: 600.4K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the zigzag level order traversal of its nodes'
 * values. (ie, from left to right, then right to left for the next level and
 * alternate between).
 *
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * return its zigzag level order traversal as:
 *
 * [
 * ⁠ [3],
 * ⁠ [20,9],
 * ⁠ [15,7]
 * ]
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = function zigzagLevelOrder(root) {
  const levels = [];
  if (root === null) {
    return levels;
  }

  const stack = [root];
  let reverse = false;

  while (stack.length) {
    const thisLevel = [];
    const len = stack.length;
    for (let i = 0; i < len; i += 1) {
      const node = stack.shift();
      if (node === null) {
        continue;
      }

      const { left, right, val } = node;
      if (reverse) {
        thisLevel.unshift(val);
      } else {
        thisLevel.push(val);
      }
      stack.push(left, right);
    }

    reverse = !reverse;

    if (thisLevel.length) {
      levels.push(thisLevel);
    }
  }

  return levels;
};
