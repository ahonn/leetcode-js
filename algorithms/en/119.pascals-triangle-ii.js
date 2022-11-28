/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 *
 * https://leetcode.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (41.97%)
 * Total Accepted:    184.4K
 * Total Submissions: 439.4K
 * Testcase Example:  '3'
 *
 * Given a non-negative index k where k ≤ 33, return the kth index row of the
 * Pascal's triangle.
 *
 * Note that the row index starts from 0.
 *
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 *
 * Example:
 *
 *
 * Input: 3
 * Output: [1,3,3,1]
 *
 *
 * Follow up:
 *
 * Could you optimize your algorithm to use only O(k) extra space?
 *
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function getRow(rowIndex) {
  const result = [1];
  if (rowIndex === 0) {
    return result;
  }

  for (let i = 1; i < rowIndex + 1; i += 1) {
    for (let j = i; j >= 1; j -= 1) {
      if (result[j] === undefined) {
        result[j] = 1;
      } else {
        result[j] += result[j - 1];
      }
    }
  }

  return result;
};
