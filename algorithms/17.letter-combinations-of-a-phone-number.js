/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (40.67%)
 * Total Accepted:    388.2K
 * Total Submissions: 934.9K
 * Testcase Example:  '"23"'
 *
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent.
 *
 * A mapping of digit to letters (just like on the telephone buttons) is given
 * below. Note that 1 does not map to any letters.
 *
 * Example:
 *
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 * Note:
 *
 * Although the above answer is in lexicographical order, your answer could be
 * in any order you want.
 *
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function letterCombinations(digits) {
  const len = digits.length;
  if (len === 0) {
    return [];
  }

  const digit2Letters = ['', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

  const combinations = (prefixs, index) => {
    if (index === len) {
      return prefixs;
    }

    const digit = +digits[index];
    const letters = digit2Letters[digit - 1];
    const result = [];
    for (let i = 0; i < prefixs.length; i += 1) {
      const prefix = prefixs[i];
      for (let j = 0; j < letters.length; j += 1) {
        result.push(prefix + letters[j]);
      }
    }
    return combinations(result, index + 1);
  };

  return combinations([''], 0);
};
