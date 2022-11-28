/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 *
 * https://leetcode.com/problems/word-pattern/description/
 *
 * algorithms
 * Easy (34.61%)
 * Total Accepted:    133.4K
 * Total Submissions: 385.2K
 * Testcase Example:  '"abba"\n"dog cat cat dog"'
 *
 * Given a pattern and a string str, find if str follows the same pattern.
 *
 * Here follow means a full match, such that there is a bijection between a
 * letter in pattern and a non-empty word in str.
 *
 * Example 1:
 *
 * Input: pattern = "abba", str = "dog cat cat dog"
 * Output: true
 *
 * Example 2:
 *
 * Input:pattern = "abba", str = "dog cat cat fish"
 * Output: false
 *
 * Example 3:
 *
 * Input: pattern = "aaaa", str = "dog cat cat dog"
 * Output: false
 *
 * Example 4:
 *
 * Input: pattern = "abba", str = "dog dog dog dog"
 * Output: false
 *
 * Notes:
 * You may assume pattern contains only lowercase letters, and str contains
 * lowercase letters that may be separated by a single space.
 *
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
const wordPattern = function wordPatten(pattern, str) {
  const words = str.split(' ');
  const len = pattern.length;
  if (words.length !== len) {
    return false;
  }

  const patternMap = {};
  const wordMap = {};

  for (let i = 0; i < len; i += 1) {
    const p = pattern[i];
    const w = words[i];

    if (patternMap[p] !== wordMap[w]) {
      return false;
    }
    patternMap[p] = i;
    wordMap[w] = i;
  }
  return true;
};
