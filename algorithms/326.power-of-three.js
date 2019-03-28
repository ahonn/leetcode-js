/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 *
 * https://leetcode.com/problems/power-of-three/description/
 *
 * algorithms
 * Easy (41.46%)
 * Total Accepted:    174.4K
 * Total Submissions: 420.6K
 * Testcase Example:  '27'
 *
 * Given an integer, write a function to determine if it is a power of three.
 *
 * Example 1:
 *
 * Input: 27
 * Output: true
 *
 * Example 2:
 *
 * Input: 0
 * Output: false
 *
 * Example 3:
 *
 * Input: 9
 * Output: true
 *
 * Example 4:
 *
 * Input: 45
 * Output: false
 *
 * Follow up:
 * Could you do it without using any loop / recursion?
 */
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function isPowerOfThree(n) {
  return (Math.log10(n) / Math.log10(3)) % 1 === 0;
};
