/*
 * [28] Implement strStr()
 *
 * https://leetcode.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (31.00%)
 * Total Accepted:    369.6K
 * Total Submissions: 1.2M
 * Testcase Example:  '"hello"\n"ll"'
 *
 * Implement strStr().
 *
 * Return the index of the first occurrence of needle in haystack, or -1 if
 * needle is not part of haystack.
 *
 * Example 1:
 *
 *
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 *
 *
 * Clarification:
 *
 * What should we return when needle is an empty string? This is a great
 * question to ask during an interview.
 *
 * For the purpose of this problem, we will return 0 when needle is an empty
 * string. This is consistent to C's strstr() and Java's indexOf().
 *
 */
function prefixTable(patten) {
  const len = patten.length;
  const prefix = new Array(len).fill(0);

  let j = 0;
  let i = 1;
  while (i < len) {
    if (patten[i] === patten[j]) {
      j += 1;
      prefix[i] = j;
      i += 1;
    } else if (j > 0) {
      j = prefix[j - 1];
    } else {
      prefix[i] = 0;
      i += 1;
    }
  }

  return prefix;
}

/**
 * https://www.youtube.com/watch?v=dgPabAsTFa8
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function strStr(haystack, needle) {
  if (needle === '') {
    return 0;
  }

  const len = haystack.length;
  const prefix = prefixTable(needle);

  let i = 0;
  let j = 0;
  while (i < len) {
    if (haystack[i] === needle[j]) {
      if (j === needle.length - 1) {
        return i - j;
      }
      i += 1;
      j += 1;
    } else if (j > 0) {
      j = prefix[j - 1];
    } else {
      i += 1;
    }
  }

  return -1;
};
