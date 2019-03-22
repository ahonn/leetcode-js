/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (51.20%)
 * Total Accepted:    310.9K
 * Total Submissions: 607K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * Given two strings s and t , write a function to determine if t is an anagram
 * of s.
 *
 * Example 1:
 *
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Example 2:
 *
 * Input: s = "rat", t = "car"
 * Output: false
 *
 * Note:
 * You may assume the string contains only lowercase alphabets.
 *
 * Follow up:
 * What if the inputs contain unicode characters? How would you adapt your
 * solution to such case?
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function isAnagram(s, t) {
  const sLen = s.length;
  const tLen = t.length;

  if (sLen !== tLen) {
    return false;
  }

  const letters = new Int8Array(26);
  for (let i = 0; i < sLen; i += 1) {
    letters[s.charCodeAt(i) - 97] += 1;
    letters[t.charCodeAt(i) - 97] -= 1;
  }

  return letters.every(c => c === 0);
};
