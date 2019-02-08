/*
 * [66] Plus One
 *
 * https://leetcode.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (40.53%)
 * Total Accepted:    343.6K
 * Total Submissions: 847.6K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a non-empty array of digits representing a non-negative integer, plus
 * one to the integer.
 *
 * The digits are stored such that the most significant digit is at the head of
 * the list, and each element in the array contain a single digit.
 *
 * You may assume the integer does not contain any leading zero, except the
 * number 0 itself.
 *
 * Example 1:
 *
 *
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 *
 *
 * Example 2:
 *
 *
 * Input: [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 *
 *
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function plusOne(digits) {
  const len = digits.length;
  for (let i = len - 1; i >= 0; i -= 1) {
    const num = digits[i];
    if (num < 9) {
      digits[i] = num + 1;
      return digits;
    }
    digits[i] = 0;
  }
  if (digits[0] === 0) {
    digits.unshift(1);
  }

  return digits;
};
