/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 *
 * https://leetcode.com/problems/valid-perfect-square/description/
 *
 * algorithms
 * Easy (39.45%)
 * Total Accepted:    104.4K
 * Total Submissions: 263.9K
 * Testcase Example:  '16'
 *
 * Given a positive integer num, write a function which returns True if num is
 * a perfect square else False.
 *
 * Note: Do not use any built-in library function such as sqrt.
 *
 * Example 1:
 *
 * Input: 16
 * Output: true
 *
 * Example 2:
 *
 * Input: 14
 * Output: false
 */
/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function isPerfectSquare(num) {
  if (num === 1) {
    return true;
  }

  let guess = num >> 1;
  while (guess * guess > num) {
    guess = (num / guess + guess) >> 1;
  }

  return guess * guess === num;
};
