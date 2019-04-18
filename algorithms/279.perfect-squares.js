/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 *
 * https://leetcode.com/problems/perfect-squares/description/
 *
 * algorithms
 * Medium (41.10%)
 * Total Accepted:    173.7K
 * Total Submissions: 418.6K
 * Testcase Example:  '12'
 *
 * Given a positive integer n, find the least number of perfect square numbers
 * (for example, 1, 4, 9, 16, ...) which sum to n.
 *
 * Example 1:
 *
 * Input: n = 12
 * Output: 3
 * Explanation: 12 = 4 + 4 + 4.
 *
 * Example 2:
 *
 * Input: n = 13
 * Output: 2
 * Explanation: 13 = 4 + 9.
 */
/**
 * @param {number} n
 * @return {number}
 */
const numSquares = function numSquares(n) {
  const nums = new Uint32Array(n + 1);
  nums.fill(Number.MAX_SAFE_INTEGER);
  for (let i = 1; i ** 2 <= n; i += 1) {
    nums[i ** 2] = 1;
  }

  for (let x = 0; x <= n; x += 1) {
    for (let y = 0; x + (y ** 2) <= n; y += 1) {
      const sum = x + (y ** 2);
      nums[sum] = Math.min(nums[x] + 1, nums[sum]);
    }
  }
  return nums[n];
};
