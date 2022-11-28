/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (28.07%)
 * Total Accepted:    854.7K
 * Total Submissions: 3M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 *
 * Example 1:
 *
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * Example 2:
 *
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 * Example 3:
 *
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 */
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function lengthOfLongestSubstring(s) {
  if (s === '') {
    return 0;
  }

  let result = 0;
  let start = 0;
  const len = s.length;
  for (let i = 0; i < len; i += 1) {
    const index = s.indexOf(s[i], start);
    if (index > -1 && index < i) {
      start = index + 1;
    }

    result = Math.max(result, index - start + 1);
  }

  return result;
};
