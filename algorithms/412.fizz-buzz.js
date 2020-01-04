/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 *
 * https://leetcode.com/problems/fizz-buzz/description/
 *
 * algorithms
 * Easy (59.01%)
 * Total Accepted:    265K
 * Total Submissions: 436.5K
 * Testcase Example:  '1'
 *
 * Write a program that outputs the string representation of numbers from 1 to
 * n.
 *
 * But for multiples of three it should output “Fizz” instead of the number and
 * for the multiples of five output “Buzz”. For numbers which are multiples of
 * both three and five output “FizzBuzz”.
 *
 * Example:
 *
 * n = 15,
 *
 * Return:
 * [
 * ⁠   "1",
 * ⁠   "2",
 * ⁠   "Fizz",
 * ⁠   "4",
 * ⁠   "Buzz",
 * ⁠   "Fizz",
 * ⁠   "7",
 * ⁠   "8",
 * ⁠   "Fizz",
 * ⁠   "Buzz",
 * ⁠   "11",
 * ⁠   "Fizz",
 * ⁠   "13",
 * ⁠   "14",
 * ⁠   "FizzBuzz"
 * ]
 *
 *
 */
/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function fizzBuzz(n) {
  const result = new Array(n).fill('');

  for (let i = 1; i <= n; i += 1) {
    const index = i - 1;

    if (i % 3 === 0) {
      result[index] += 'Fizz';
    }
    if (i % 5 === 0) {
      result[index] += 'Buzz';
    }
    if (result[index] === '') {
      result[index] = i.toString();
    }
  }
  return result;
};
