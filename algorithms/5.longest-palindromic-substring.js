/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (26.78%)
 * Total Accepted:    511.3K
 * Total Submissions: 1.9M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 *
 * Example 1:
 *
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 *
 * Example 2:
 *
 * Input: "cbbd"
 * Output: "bb"
 */
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function longestPalindrome(s) {
  let strWithHash = '#';
  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];
    strWithHash += `${char}#`;
  }

  const len = strWithHash.length;
  const max = new Uint16Array(len);

  let maxLen = 0;
  let maxIndex = 0;

  let right = 0;
  let center = 0;
  for (let i = 0; i < len; i += 1) {
    // Symmetric point use values that have already been calculated
    if (i < right) {
      max[i] = Math.min(max[2 * center - i], right - i);
    } else {
      max[i] = 1;
    }

    // Find the longest palindrome string with the center point i, then record string length
    while (
      i - max[i] >= 0
      && i + max[i] < len
      && strWithHash[i - max[i]] === strWithHash[i + max[i]]
    ) {
      max[i] += 1;
    }

    // Record the range of palindrome that have been calc
    if (i + max[i] - 1 > right) {
      center = i;
      right = i + max[i] - 1;
    }

    // Record longest palindrome string center point index & length
    if (max[i] > maxLen) {
      maxIndex = i;
      maxLen = max[i];
    }
  }

  const start = maxIndex - (maxLen - 1);
  const end = maxIndex + (maxLen - 1);
  return strWithHash.slice(start, end).replace(/#/g, '');
};
