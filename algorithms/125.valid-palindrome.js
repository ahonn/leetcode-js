/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 *
 * https://leetcode.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (30.19%)
 * Total Accepted:    321.6K
 * Total Submissions: 1.1M
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * Given a string, determine if it is a palindrome, considering only
 * alphanumeric characters and ignoring cases.
 *
 * Note: For the purpose of this problem, we define empty string as valid
 * palindrome.
 *
 * Example 1:
 *
 *
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: "race a car"
 * Output: false
 *
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function isPalindrome(s) {
  const strWithWord = s.replace(/[^\w+]/g, '').toUpperCase();

  const len = strWithWord.length;
  const halfLen = len >> 1;
  for (let i = 0; i < halfLen; i += 1) {
    if (strWithWord[i] !== strWithWord[len - i - 1]) {
      return false;
    }
  }
  return true;
};
