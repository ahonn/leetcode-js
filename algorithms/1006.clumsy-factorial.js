// Normally, the factorial of a positive integer n is the product of all positive integers less than or equal to n.  For example, factorial(10) = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1.

// We instead make a clumsy factorial: using the integers in decreasing order, we swap out the multiply operations for a fixed rotation of operations: multiply (*), divide (/), add (+) and subtract (-) in this order.

// For example, clumsy(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1.  However, these operations are still applied using the usual order of operations of arithmetic: we do all multiplication and division steps before any addition or subtraction steps, and multiplication and division steps are processed left to right.

// Additionally, the division that we use is floor division such that 10 * 9 / 8 equals 11.  This guarantees the result is an integer.

// Implement the clumsy function as defined above: given an integer N, it returns the clumsy factorial of N.

// Example 1:

// Input: 4
// Output: 7
// Explanation: 7 = 4 * 3 / 2 + 1
// Example 2:

// Input: 10
// Output: 12
// Explanation: 12 = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1

// Note:

// 1 <= N <= 10000
// -2^31 <= answer <= 2^31 - 1  (The answer is guaranteed to fit within a 32-bit integer.)

/**
 * @param {number} N
 * @return {number}
 */
const clumsy = function clumsy(N) {
  if (N === 1) {
    return 1;
  }

  let ans = 0;
  for (let i = 0; i < N; i += 4) {
    const a = N - i;
    const b = (a - 1) > 0 ? (a - 1) : 1;
    const c = (b - 1) > 0 ? (b - 1) : 1;

    const s = Math.floor(a * b / c);

    ans -= (ans === 0) ? -s : s;
  }

  for (let i = 3; i < N; i += 4) {
    ans += (N - i);
  }

  return ans;
};

console.log(clumsy(5));
