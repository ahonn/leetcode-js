/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 *
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (44.44%)
 * Total Accepted:    227K
 * Total Submissions: 510.7K
 * Testcase Example:  '5'
 *
 * Given a non-negative integer numRows, generate the first numRows of Pascal's
 * triangle.
 *
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 *
 * Example:
 *
 *
 * Input: 5
 * Output:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 *
 *
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function generate(numRows) {
  if (numRows === 0) {
    return [];
  }

  const triangle = [[1]];

  for (let i = 2; i <= numRows; i += 1) {
    const lastRow = triangle[triangle.length - 1];
    const newRow = [];

    const len = Math.ceil(i / 2);
    for (let j = 0; j < len; j += 1) {
      const val = j === 0 ? 1 : lastRow[j - 1] + lastRow[j];

      newRow[j] = val;
      newRow[i - j - 1] = val;
    }

    triangle.push(newRow);
  }

  return triangle;
};

generate(5);
