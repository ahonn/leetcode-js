/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 *
 * https://leetcode.com/problems/excel-sheet-column-number/description/
 *
 * algorithms
 * Easy (50.87%)
 * Total Accepted:    208.1K
 * Total Submissions: 409.1K
 * Testcase Example:  '"A"'
 *
 * Given a column title as appear in an Excel sheet, return its corresponding
 * column number.
 *
 * For example:
 *
 * ⁠   A -> 1
 * ⁠   B -> 2
 * ⁠   C -> 3
 * ⁠   ...
 * ⁠   Z -> 26
 * ⁠   AA -> 27
 * ⁠   AB -> 28
 * ⁠   ...
 *
 * Example 1:
 *
 * Input: "A"
 * Output: 1
 *
 * Example 2:
 *
 * Input: "AB"
 * Output: 28
 *
 * Example 3:
 *
 * Input: "ZY"
 * Output: 701
 */
/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = function titleToNumber(s) {
  let sum = 0;

  const len = s.length;
  for (let i = len - 1; i >= 0; i -= 1) {
    const code = s.charCodeAt(i);
    const num = (code - 64) * (26 ** (len - 1 - i));
    sum += num;
  }

  return sum;
};
