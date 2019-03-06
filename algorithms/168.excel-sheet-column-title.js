/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 *
 * https://leetcode.com/problems/excel-sheet-column-title/description/
 *
 * algorithms
 * Easy (28.52%)
 * Total Accepted:    163.9K
 * Total Submissions: 574.6K
 * Testcase Example:  '1'
 *
 * Given a positive integer, return its corresponding column title as appear in
 * an Excel sheet.
 *
 * For example:
 *
 * ⁠   1 -> A
 * ⁠   2 -> B
 * ⁠   3 -> C
 * ⁠   ...
 * ⁠   26 -> Z
 * ⁠   27 -> AA
 * ⁠   28 -> AB
 * ⁠   ...
 *
 * Example 1:
 *
 * Input: 1
 * Output: "A"
 *
 * Example 2:
 *
 * Input: 28
 * Output: "AB"
 *
 * Example 3:
 *
 * Input: 701
 * Output: "ZY"
 *
 */
/**
 * @param {number} n
 * @return {string}
 */
const convertToTitle = function convertToTitle(n) {
  if (n <= 26) {
    return String.fromCharCode(64 + n);
  }

  let title = '';
  while (n) {
    const charCode = ((n - 1) % 26) + 65;
    title = String.fromCharCode(charCode) + title;
    n = Math.floor((n - 1) / 26);
  }

  return title;
};
