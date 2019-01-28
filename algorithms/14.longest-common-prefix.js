/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.79%)
 * Total Accepted:    391.1K
 * Total Submissions: 1.2M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 *
 *
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 *
 *
 * Example 2:
 *
 *
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 *
 * Note:
 *
 * All given inputs are in lowercase letters a-z.
 *
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function longestCommonPrefix(strs) {
  const strsLen = strs.length;
  if (strsLen === 0) {
    return '';
  }
  if (strsLen === 1) {
    return strs.shift();
  }

  const sortedStrs = strs.sort((a, b) => a.length > b.length);
  const firstStr = sortedStrs.shift();
  const firstStrLen = firstStr.length;

  let commonPrefix = '';
  for (let i = 0; i < firstStrLen; i += 1) {
    const char = firstStr[i];
    const hasSameChar = sortedStrs.every(str => str[i] === char);
    if (!hasSameChar) {
      break;
    }
    commonPrefix += char;
  }
  return commonPrefix;
};
