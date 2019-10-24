/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 *
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (39.81%)
 * Total Accepted:    266.1K
 * Total Submissions: 608.1K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * Given preorder and inorder traversal of a tree, construct the binary tree.
 *
 * Note:
 * You may assume that duplicates do not exist in the tree.
 *
 * For example, given
 *
 * preorder = [3,9,20,15,7]
 * inorder = [9,3,15,20,7]
 *
 * Return the following binary tree:
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function buildTree(preorder, inorder) {
  const buildRecur = (preorderLeft, preorderRight, inorderLeft, inorderRight) => {
    if (preorderLeft > preorderRight) {
      return null;
    }

    const rootVal = preorder[preorderLeft];
    // eslint-disable-next-line
    const root = new TreeNode(rootVal);
    if (preorderLeft === preorderRight) {
      return root;
    }

    const rootIndex = inorder.indexOf(rootVal);
    const leftLen = rootIndex - inorderLeft;
    root.left = buildRecur(preorderLeft + 1, preorderLeft + leftLen, inorderLeft, rootIndex - 1);
    root.right = buildRecur(preorderLeft + leftLen + 1, preorderRight, rootIndex + 1, inorderRight);

    return root;
  };
  return buildRecur(0, preorder.length - 1, 0, inorder.length - 1);
};
