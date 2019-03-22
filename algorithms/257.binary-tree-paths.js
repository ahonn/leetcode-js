/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
 *
 * https://leetcode.com/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (45.21%)
 * Total Accepted:    214.2K
 * Total Submissions: 473.4K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * Given a binary tree, return all root-to-leaf paths.
 *
 * Note: A leaf is a node with no children.
 *
 * Example:
 *
 * Input:
 *
 * ⁠  1
 * ⁠/   \
 * 2     3
 * ⁠\
 * ⁠ 5
 *
 * Output: ["1->2->5", "1->3"]
 *
 * Explanation: All root-to-leaf paths are: 1->2->5, 1->3
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
 * @return {string[]}
 */
const binaryTreePaths = function binaryTreePaths(root) {
  const paths = [];
  if (root === null) {
    return paths;
  }

  const searchPath = (node, path) => {
    path += node.val;

    if (node.left === null && node.right === null) {
      paths.push(path);
    }
    if (node.left !== null) {
      searchPath(node.left, `${path}->`);
    }
    if (node.right !== null) {
      searchPath(node.right, `${path}->`);
    }
  };

  searchPath(root, '');
  return paths;
};
