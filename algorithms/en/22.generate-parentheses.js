/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (53.53%)
 * Total Accepted:    341.7K
 * Total Submissions: 621K
 * Testcase Example:  '3'
 *
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 *
 * For example, given n = 3, a solution set is:
 *
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 */
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function generateParenthesis(n) {
  const result = [];

  const search = (str, open, close) => {
    if (open === 0 && close === 0) {
      result.push(str);
      return;
    }

    if (open > 0) {
      search(`${str}(`, open - 1, close + 1);
    }
    if (close > 0) {
      search(`${str})`, open, close - 1);
    }
  };

  search('', n, 0);
  return result;
};
