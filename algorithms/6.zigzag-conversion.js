/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 *
 * https://leetcode.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (30.94%)
 * Total Accepted:    314.3K
 * Total Submissions: 992.2K
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
 * of rows like this: (you may want to display this pattern in a fixed font for
 * better legibility)
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 * Write the code that will take a string and make this conversion given a
 * number of rows:
 *
 * string convert(string s, int numRows);
 *
 * Example 1:
 *
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 *
 * Example 2:
 *
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Explanation:
 *
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 *
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function convert(s, numRows) {
  const len = s.length;
  const size = 2 * numRows - 2;

  if (numRows === 1) {
    return s;
  }

  let str = '';
  for (let i = 0; i < numRows; i += 1) {
    for (let j = i; j < len; j += size) {
      str += s[j];

      if (i !== 0 && i !== numRows - 1) {
        const index = j + size - 2 * i;
        if (index < len) {
          str += s[index];
        }
      }
    }
  }

  return str;
};
