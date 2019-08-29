/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 *
 * https://leetcode.com/problems/set-matrix-zeroes/description/
 *
 * algorithms
 * Medium (39.12%)
 * Total Accepted:    229.5K
 * Total Submissions: 565K
 * Testcase Example:  '[[1,1,1],[1,0,1],[1,1,1]]'
 *
 * Given a m x n matrix, if an element is 0, set its entire row and column to
 * 0. Do it in-place.
 *
 * Example 1:
 *
 * Input:
 * [
 * [1,1,1],
 * [1,0,1],
 * [1,1,1]
 * ]
 * Output:
 * [
 * [1,0,1],
 * [0,0,0],
 * [1,0,1]
 * ]
 *
 * Example 2:
 *
 * Input:
 * [
 * [0,1,2,0],
 * [3,4,5,2],
 * [1,3,1,5]
 * ]
 * Output:
 * [
 * [0,0,0,0],
 * [0,4,5,0],
 * [0,3,1,0]
 * ]
 *
 * Follow up:
 *
 * A straight forward solution using O(mn) space is probably a bad idea.
 * A simple improvement uses O(m + n) space, but still not the best
 * solution.
 * Could you devise a constant space solution?
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function setZeroes(matrix) {
  const rowSet = new Set();
  const colSet = new Set();

  const len = matrix.length;
  const rowLen = matrix[0].length;
  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < rowLen; j += 1) {
      if (matrix[i][j] === 0) {
        rowSet.add(i);
        colSet.add(j);
      }
    }
  }

  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < rowLen; j += 1) {
      if (rowSet.has(i) || colSet.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};
