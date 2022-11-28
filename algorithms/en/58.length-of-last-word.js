/*
 * [58] Length of Last Word
 *
 * https://leetcode.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (32.13%)
 * Total Accepted:    241.1K
 * Total Submissions: 750.2K
 * Testcase Example:  '"Hello World"'
 *
 * Given a string s consists of upper/lower-case alphabets and empty space
 * characters ' ', return the length of last word in the string.
 *
 * If the last word does not exist, return 0.
 *
 * Note: A word is defined as a character sequence consists of non-space
 * characters only.
 *
 * Example:
 *
 * Input: "Hello World"
 * Output: 5
 *
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function lengthOfLastWord(s) {
  const str = s.trim();
  const strLen = str.length;

  let length = 0;
  for (let i = strLen - 1; i >= 0; i -= 1) {
    const char = str.charAt(i);
    if (char === ' ') {
      return length;
    }
    length += 1;
  }

  return length;
};
