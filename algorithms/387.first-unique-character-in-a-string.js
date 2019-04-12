/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 *
 * https://leetcode.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (49.39%)
 * Total Accepted:    250.1K
 * Total Submissions: 503.7K
 * Testcase Example:  '"leetcode"'
 *
 * Given a string, find the first non-repeating character in it and return it's
 * index. If it doesn't exist, return -1.
 *
 * Examples:
 *
 * s = "leetcode"
 * return 0.
 *
 * s = "loveleetcode",
 * return 2.
 *
 * Note: You may assume the string contain only lowercase letters.
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function firstUniqChar(s) {
  const chars = new Uint16Array(26);
  for (let i = 0; i < s.length; i += 1) {
    const c = s.charCodeAt(i) - 97;
    chars[c] += 1;
  }
  for (let i = 0; i < s.length; i += 1) {
    const c = s.charCodeAt(i) - 97;
    if (chars[c] === 1) {
      return i;
    }
  }
  return -1;
};
