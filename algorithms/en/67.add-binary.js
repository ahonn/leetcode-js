/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (37.66%)
 * Total Accepted:    270.8K
 * Total Submissions: 719K
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings, return their sum (also a binary string).
 *
 * The input strings are both non-empty and contains only characters 1 or 0.
 *
 * Example 1:
 *
 *
 * Input: a = "11", b = "1"
 * Output: "100"
 *
 * Example 2:
 *
 *
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 *
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function addBinary(a, b) {
  const aLen = a.length;
  const bLen = b.length;
  const maxLen = Math.max(aLen, bLen);

  let carry = 0;
  let sum = '';
  for (let i = 0; i < maxLen; i += 1) {
    const aBit = +a[aLen - i - 1] || 0;
    const bBit = +b[bLen - i - 1] || 0;
    const bitSum = aBit + bBit + carry;

    carry = (bitSum >= 2) ? 1 : 0;
    sum = `${bitSum % 2}${sum}`;
  }

  if (carry === 1) {
    sum = `1${sum}`;
  }

  return sum;
};
