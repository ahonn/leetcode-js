/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (55.41%)
 * Total Accepted:    543K
 * Total Submissions: 922.9K
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given a binary tree, return the inorder traversal of its nodes' values.
 *
 * Example:
 *
 * Input: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 *
 * Output: [1,3,2]
 *
 * Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */
const inorderTraversal = function inorderTraversal(root) {
  const values = [];
  const nodes = [root];

  while (nodes.length > 0) {
    const node = nodes.shift();
    if (typeof node === 'number') {
      values.push(node);
      continue;
    }

    if (node !== null) {
      nodes.unshift(node.right);
      nodes.unshift(node.val);
      nodes.unshift(node.left);
    }
  }
  return values;
};
