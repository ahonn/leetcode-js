/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 *
 * https://leetcode.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (29.80%)
 * Total Accepted:    255.7K
 * Total Submissions: 822K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * Given a matrix of m x n elements (m rows, n columns), return all elements of
 * the matrix in spiral order.
 *
 * Example 1:
 *
 * Input:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * Output: [1,2,3,6,9,8,7,4,5]
 *
 * Example 2:
 *
 * Input:
 * [
 * ⁠ [1, 2, 3, 4],
 * ⁠ [5, 6, 7, 8],
 * ⁠ [9,10,11,12]
 * ]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function spiralOrder(matrix) {
  const elements = [];

  while (matrix.length > 0) {
    const firstRow = matrix.shift();
    elements.push(...firstRow);

    /*
     *            6 9
     * 4 5 6      5 8
     * 7 8 9  ->  4 7
     */
    const newMatrix = [];
    for (let i = 0; i < matrix.length; i += 1) {
      const row = matrix[i];
      for (let j = row.length - 1; j >= 0; j -= 1) {
        const index = row.length - j - 1;
        if (newMatrix[index] === undefined) {
          newMatrix[index] = [];
        }
        newMatrix[index].push(row[j]);
      }
    }
    matrix = newMatrix;
  }

  return elements;
};
