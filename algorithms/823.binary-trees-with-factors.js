/*
 * @lc app=leetcode id=823 lang=javascript
 *
 * [823] Binary Trees With Factors
 *
 * https://leetcode.com/problems/binary-trees-with-factors/description/
 *
 * algorithms
 * Medium (31.86%)
 * Total Accepted:    6.6K
 * Total Submissions: 20.6K
 * Testcase Example:  '[2,4]'
 *
 * Given an array of unique integers, each integer is strictly greater than 1.
 *
 * We make a binary tree using these integers and each number may be used for
 * any number of times.
 *
 * Each non-leaf node's value should be equal to the product of the values of
 * it's children.
 *
 * How many binary trees can we make?  Return the answer modulo 10 ** 9 + 7.
 *
 * Example 1:
 *
 * Input: A = [2, 4]
 * Output: 3
 * Explanation: We can make these trees: [2], [4], [4, 2, 2]
 *
 * Example 2:
 *
 * Input: A = [2, 4, 5, 10]
 * Output: 7
 * Explanation: We can make these trees: [2], [4], [5], [10], [4, 2, 2], [10,
 * 2, 5], [10, 5, 2].
 *
 * Note:
 *
 * 1 <= A.length <= 1000.
 * 2 <= A[i] <= 10 ^ 9.
 */
/**
 * @param {number[]} A
 * @return {number}
 */
const numFactoredBinaryTrees = function numFactoredBinaryTrees(A) {
  const MOD = (10 ** 9) + 7;
  const len = A.length;
  A.sort((a, b) => a - b);

  const dp = new Uint32Array(len).fill(1);
  const index = new Map();
  for (let i = 0; i < len; i += 1) {
    const num = A[i];
    index.set(num, i);
  }

  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (A[i] % A[j] === 0) {
        const rest = A[i] / A[j];
        if (index.has(rest)) {
          // eslint-disable-next-line
          dp[i] = (dp[i] + (dp[j] * dp[index.get(rest)])) % MOD;
        }
      }
    }
  }

  const answer = dp.reduce((sum, count) => {
    sum += count;
    return sum;
  }, 0);
  return answer % MOD;
};
