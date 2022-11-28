/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 *
 * https://leetcode.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (28.32%)
 * Total Accepted:    217.3K
 * Total Submissions: 766.2K
 * Testcase Example:  '10'
 *
 * Count the number of prime numbers less than a non-negative number, n.
 *
 * Example:
 *
 * Input: 10
 * Output: 4
 * Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 */
/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function countPrimes(n) {
  if (n < 2) {
    return 0;
  }

  let count = 0;
  const notPrimeTable = new Uint8Array(n);

  for (let i = 2; i <= n; i += 1) {
    if (notPrimeTable[i] === 0) {
      count += 1;

      for (let j = 2; i * j < n; j += 1) {
        notPrimeTable[i * j] = 1;
      }
    }
  }

  return count;
};
