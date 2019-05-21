/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 *
 * https://leetcode.com/problems/regular-expression-matching/description/
 *
 * algorithms
 * Hard (25.03%)
 * Total Accepted:    301.9K
 * Total Submissions: 1.2M
 * Testcase Example:  '"aa"\n"a"'
 *
 * Given an input string (s) and a pattern (p), implement regular expression
 * matching with support for '.' and '*'.
 *
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 *
 * The matching should cover the entire input string (not partial).
 *
 * Note:
 *
 * s could be empty and contains only lowercase letters a-z.
 * p could be empty and contains only lowercase letters a-z, and characters
 * like . or *.
 *
 * Example 1:
 *
 * Input:
 * s = "aa"
 * p = "a"
 * Output: false
 * Explanation: "a" does not match the entire string "aa".
 *
 * Example 2:
 *
 * Input:
 * s = "aa"
 * p = "a*"
 * Output: true
 * Explanation: '*' means zero or more of the precedeng element, 'a'.
 * Therefore, by repeating 'a' once, it becomes "aa".
 *
 * Example 3:
 *
 * Input:
 * s = "ab"
 * p = ".*"
 * Output: true
 * Explanation: ".*" means "zero or more (*) of any character (.)".
 *
 * Example 4:
 *
 * Input:
 * s = "aab"
 * p = "c*a*b"
 * Output: true
 * Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore
 * it matches "aab".
 *
 * Example 5:
 *
 * Input:
 * s = "mississippi"
 * p = "mis*is*p*."
 * Output: false
 *
 *
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function isMatch(s, p) {
  const sLen = s.length;
  const pLen = p.length;
  const dp = [];
  for (let i = 0; i < sLen + 1; i += 1) {
    dp[i] = new Uint8Array(pLen + 1);
  }

  // Empty s is match empty p
  dp[0][0] = 1;
  for (let i = 0; i < pLen; i += 1) {
    const pat = p[i];
    if (pat === '*' && dp[0][i - 1]) {
      dp[0][i + 1] = 1;
    }
  }
  for (let i = 0; i < sLen; i += 1) {
    for (let j = 0; j < pLen; j += 1) {
      if (p[j] === '.' || p[j] === s[i]) {
        dp[i + 1][j + 1] = dp[i][j];
      }
      if (p[j] === '*') {
        if (p[j - 1] !== s[i] && p[j - 1] !== '.') {
          dp[i + 1][j + 1] = dp[i + 1][j - 1];
        } else {
          dp[i + 1][j + 1] = dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1];
        }
      }
    }
  }

  return dp[sLen][pLen];
};
