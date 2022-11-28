/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 *
 * https://leetcode.com/problems/palindrome-partitioning/description/
 *
 * algorithms
 * Medium (39.87%)
 * Total Accepted:    190.7K
 * Total Submissions: 436.9K
 * Testcase Example:  '"aab"'
 *
 * Given a string s, partition s such that every substring of the partition is
 * a palindrome.
 *
 * Return all possible palindrome partitioning of s.
 *
 * Example:
 *
 * Input: "aab"
 * Output:
 * [
 * ⁠ ["aa","b"],
 * ⁠ ["a","a","b"]
 * ]
 *
 *
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = function partition(s) {
  const len = s.length;
  if (len === 0) {
    return [];
  }

  const isPalindrome = (start, end) => {
    while (start < end) {
      if (s[start] !== s[end]) {
        return false;
      }
      start += 1;
      end -= 1;
    }
    return true;
  };

  const result = [];
  const dfs = (current, start) => {
    if (start === len) {
      result.push(current);
      return;
    }

    for (let i = start; i < len; i += 1) {
      if (isPalindrome(start, i)) {
        const substr = s.substr(start, i - start + 1);
        current.push(substr);
        dfs(current.slice(), i + 1);
        current.pop();
      }
    }
  };

  dfs([], 0);
  return result;
};
