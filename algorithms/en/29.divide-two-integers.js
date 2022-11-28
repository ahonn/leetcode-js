/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 *
 * https://leetcode.com/problems/divide-two-integers/description/
 *
 * algorithms
 * Medium (16.13%)
 * Total Accepted:    199K
 * Total Submissions: 1.2M
 * Testcase Example:  '10\n3'
 *
 * Given two integers dividend and divisor, divide two integers without using
 * multiplication, division and mod operator.
 *
 * Return the quotient after dividing dividend by divisor.
 *
 * The integer division should truncate toward zero.
 *
 * Example 1:
 *
 * Input: dividend = 10, divisor = 3
 * Output: 3
 *
 * Example 2:
 *
 * Input: dividend = 7, divisor = -3
 * Output: -2
 *
 * Note:
 *
 * Both dividend and divisor will be 32-bit signed integers.
 * The divisor will never be 0.
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of
 * this problem, assume that your function returns 231 − 1 when the division
 * result overflows.
 */
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function divide(dividend, divisor) {
  const INT_MAX = (2 ** 31) - 1;
  const INT_MIN = -(2 ** 31);

  if (divisor === 1) {
    return dividend;
  }
  if (divisor === -1 && dividend === INT_MIN) {
    return INT_MAX;
  }
  if (divisor === -1 && dividend === INT_MAX) {
    return INT_MIN;
  }

  let dd = Math.abs(dividend);
  const ds = Math.abs(divisor);
  const sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;

  let ans = 0;
  while (dd >= ds) {
    let current = ds;
    let multi = 1;

    while ((current << 1) <= dd && (current << 1) > 0) {
      current <<= 1;
      multi <<= 1;
    }
    dd -= current;
    ans += multi;
  }

  return sign * ans;
};
