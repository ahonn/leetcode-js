/*
 * [38] Count and Say
 *
 * https://leetcode.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (39.17%)
 * Total Accepted:    251.9K
 * Total Submissions: 642.7K
 * Testcase Example:  '1'
 *
 * The count-and-say sequence is the sequence of integers with the first five
 * terms as following:
 *
 *
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 *
 *
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 *
 * Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the
 * count-and-say sequence.
 *
 * Note: Each term of the sequence of integers will be represented as a
 * string.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: 1
 * Output: "1"
 *
 *
 * Example 2:
 *
 *
 * Input: 4
 * Output: "1211"
 *
 */
const countAndSayMap = {};
/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function countAndSay(n) {
  if (n === 1) {
    return '1';
  }

  const preCountAndSay = countAndSay(n - 1);

  let result = '';
  let count = 1;
  const len = preCountAndSay.length;
  for (let i = 0; i < len; i += 1) {
    const char = preCountAndSay[i];
    if (i !== len - 1 && char === preCountAndSay[i + 1]) {
      count += 1;
    } else {
      result += `${count}${char}`;
      count = 1;
    }
  }

  return result;
};
