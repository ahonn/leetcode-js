/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (45.49%)
 * Total Accepted:    207.5K
 * Total Submissions: 456.2K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the bottom-up level order traversal of its
 * nodes' values. (ie, from left to right, level by level from leaf to root).
 *
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
 *
 *
 * return its bottom-up level order traversal as:
 *
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
 *
 *
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
const levelOrderBottom = function levelOrderBottom(root) {
  if (!root) {
    return [];
  }

  const nodeQueue = [root];

  const result = [];
  while (nodeQueue.length > 0) {
    const len = nodeQueue.length;
    const currentLevel = [];
    for (let i = 0; i < len; i += 1) {
      const node = nodeQueue.shift();
      currentLevel.push(node.val);

      if (node.left) {
        nodeQueue.push(node.left);
      }
      if (node.right) {
        nodeQueue.push(node.right);
      }
    }

    result.unshift(currentLevel);
  }
  return result;
};
