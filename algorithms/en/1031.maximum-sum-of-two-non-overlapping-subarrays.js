// Given an array A of non-negative integers, return the maximum sum of elements in two non-overlapping (contiguous) subarrays, which have lengths L and M.  (For clarification, the L-length subarray could occur before or after the M-length subarray.)

// Formally, return the largest V for which V = (A[i] + A[i+1] + ... + A[i+L-1]) + (A[j] + A[j+1] + ... + A[j+M-1]) and either:

// 0 <= i < i + L - 1 < j < j + M - 1 < A.length, or
// 0 <= j < j + M - 1 < i < i + L - 1 < A.length.

// Example 1:

// Input: A = [0,6,5,2,2,5,1,9,4], L = 1, M = 2
// Output: 20
// Explanation: One choice of subarrays is [9] with length 1, and [6,5] with length 2.
// Example 2:

// Input: A = [3,8,1,3,2,1,8,9,0], L = 3, M = 2
// Output: 29
// Explanation: One choice of subarrays is [3,8,1] with length 3, and [8,9] with length 2.
// Example 3:

// Input: A = [2,1,5,6,0,9,5,0,3,8], L = 4, M = 3
// Output: 31
// Explanation: One choice of subarrays is [5,6,0,9] with length 4, and [3,8] with length 3.

// Note:

// L >= 1
// M >= 1
// L + M <= A.length <= 1000
// 0 <= A[i] <= 1000
/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} M
 * @return {number}
 */
const maxSumTwoNoOverlap = function maxSumTwoNoOverlap(A, L, M) {
  const getSumSubarrays = (len) => {
    const subarrays = [];
    for (let i = 0; i + len - 1 < A.length; i += 1) {
      let sum = 0;
      for (let j = i; j < i + len; j += 1) {
        sum += A[j];
      }
      subarrays.push({
        begin: i,
        end: i + len - 1,
        sum,
      });
    }
    subarrays.sort((a, b) => b.sum - a.sum);
    return subarrays;
  };


  const subarrayL = getSumSubarrays(L);
  const subarrayM = getSumSubarrays(M);

  const sums = [];
  for (let l = 0; l < subarrayL.length; l += 1) {
    for (let m = 0; m < subarrayM.length; m += 1) {
      const arrayL = subarrayL[l];
      const arrayM = subarrayM[m];
      if (
        (arrayL.begin < arrayM.begin && arrayL.end < arrayM.begin)
        || (arrayL.begin > arrayM.end && arrayL.end > arrayM.end)
      ) {
        sums.push(arrayL.sum + arrayM.sum);
      }
    }
  }

  return Math.max(...sums);
};
