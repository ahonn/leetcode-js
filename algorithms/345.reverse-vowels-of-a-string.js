/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 *
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (40.97%)
 * Total Accepted:    147.4K
 * Total Submissions: 358.9K
 * Testcase Example:  '"hello"'
 *
 * Write a function that takes a string as input and reverse only the vowels of
 * a string.
 *
 * Example 1:
 *
 * Input: "hello"
 * Output: "holle"
 *
 * Example 2:
 *
 * Input: "leetcode"
 * Output: "leotcede"
 *
 * Note:
 * The vowels does not include the letter "y".
 */
/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function reverseVowels(s) {
  const len = s.length;
  if (len < 2) {
    return s;
  }

  const ans = s.split('');
  const isVowels = w => 'aeiouAEIOU'.indexOf(w) !== -1;

  let start = 0;
  let end = len - 1;
  while (start < end) {
    while (start < end && !isVowels(s[start])) {
      start += 1;
    }
    while (start < end && !isVowels(s[end])) {
      end -= 1;
    }

    ans[start] = s[end];
    ans[end] = s[start];

    start += 1;
    end -= 1;
  }

  return ans.join('');
};
