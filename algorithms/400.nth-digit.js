/*
 * @lc app=leetcode id=400 lang=javascript
 *
 * [400] Nth Digit
 *
 * https://leetcode.com/problems/nth-digit/description/
 *
 * algorithms
 * Easy (30.16%)
 * Total Accepted:    46.9K
 * Total Submissions: 155.1K
 * Testcase Example:  '3'
 *
 * Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8,
 * 9, 10, 11, ...
 *
 * Note:
 * n is positive and will fit within the range of a 32-bit signed integer (n <
 * 231).
 *
 * Example 1:
 *
 * Input:
 * 3
 *
 * Output:
 * 3
 *
 * Example 2:
 *
 * Input:
 * 11
 *
 * Output:
 * 0
 *
 * Explanation:
 * The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a
 * 0, which is part of the number 10.
 */
/**
 * @param {number} n
 * @return {number}
 */
const findNthDigit = function findNthDigit(n) {
  if (n < 9) {
    return n;
  }

  let len = 1;
  let count = 9;

  while (n > len * count) {
    n -= len * count;
    len += 1;
    count *= 10;
  }

  const str = ((count / 9) + Math.floor((n - 1) / len)).toString();
  const index = (n - 1) % len;
  return str[index];
};
