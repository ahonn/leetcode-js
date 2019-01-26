/*
 * [9] Palindrome Number
 *
 * https://leetcode.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (41.19%)
 * Total Accepted:    484.9K
 * Total Submissions: 1.2M
 * Testcase Example:  '121'
 *
 * Determine whether an integer is a palindrome. An integer is a palindrome
 * when it reads the same backward as forward.
 *
 * Example 1:
 *
 *
 * Input: 121
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it
 * becomes 121-. Therefore it is not a palindrome.
 *
 *
 * Example 3:
 *
 *
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a
 * palindrome.
 *
 *
 * Follow up:
 *
 * Coud you solve it without converting the integer to a string?
 *
 */
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function isPalindrome(x) {
  if (x < 0) {
    return false;
  }

  const posNumStr = Math.abs(x).toString();
  const len = posNumStr.length;
  const halfLen = Math.floor(len / 2);

  for (let i = 0; i < halfLen; i += 1) {
    const compare1 = posNumStr.charAt(i);
    const compare2 = posNumStr.charAt(len - 1 - i);
    if (compare1 !== compare2) {
      return false;
    }
  }
  return true;
};
