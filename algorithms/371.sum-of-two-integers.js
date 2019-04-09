/*
 * @lc app=leetcode id=371 lang=javascript
 *
 * [371] Sum of Two Integers
 *
 * https://leetcode.com/problems/sum-of-two-integers/description/
 *
 * algorithms
 * Easy (51.14%)
 * Total Accepted:    129.3K
 * Total Submissions: 253.3K
 * Testcase Example:  '1\n2'
 *
 * Calculate the sum of two integers a and b, but you are not allowed to use
 * the operator + and -.
 *
 * Example 1:
 *
 * Input: a = 1, b = 2
 * Output: 3
 *
 * Example 2:
 *
 * Input: a = -2, b = 3
 * Output: 1
 */
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * getSum(9, 1)
 * => getSum(1001 ^ 01 = 1000, (1001 & 01) << 1 = 10)
 * => getSum(1000 ^ 10 = 1010, (1000 & 10) << 1 = 0)
 * => 1010 (base 2)
 * => 10 (base 10)
 */
const getSum = function getSum(a, b) {
  if (b === 0) {
    return a;
  }

  const sum = a ^ b;
  const carry = (a & b) << 1;
  return getSum(sum, carry);
};
