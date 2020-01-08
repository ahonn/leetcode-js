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
const getNext = (pattern) => {
  const len = pattern.length;
  const next = new Uint16Array(len);
  let j = 0;
  for (let i = 1; i < len; i += 1) {
    while (j > 0 && pattern[i] !== pattern[j]) {
      j = next[j - 1];
    }
    if (pattern[i] === pattern[j]) {
      j += 1;
    }
    next[i] = j;
  }
  return next;
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function strStr(haystack, needle) {
  const haystackLen = haystack.length;
  const needleLen = needle.length;

  if (needleLen === 0) {
    return 0;
  }
  if (haystackLen === 0) {
    return -1;
  }

  const next = getNext(needle);
  let j = 0;
  for (let i = 0; i < haystackLen; i += 1) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (haystack[i] === needle[j]) {
      j += 1;
    }
    if (j === needleLen) {
      return i - needleLen + 1;
    }
  }

  return -1;
};
