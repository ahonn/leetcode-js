/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 *
 * https://leetcode.com/problems/add-digits/description/
 *
 * algorithms
 * Easy (53.63%)
 * Total Accepted:    230.4K
 * Total Submissions: 429.3K
 * Testcase Example:  '38'
 *
 * Given a non-negative integer num, repeatedly add all its digits until the
 * result has only one digit.
 *
 * Example:
 *
 * Input: 38
 * Output: 2
 * Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
 * Since 2 has only one digit, return it.
 *
 * Follow up:
 * Could you do it without any loop/recursion in O(1) runtime?
 */
/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function addDigits(num) {
  // 1 + ((num - 1) % 9)
  // WTF ??;

  let ans = num;
  while (ans > 9) {
    let sum = 0;
    while (ans > 0) {
      const cur = ans % 10;
      sum += cur;
      ans = (ans - cur) / 10;
    }
    ans = sum;
  }
  return ans;
};
