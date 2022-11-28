/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 *
 * https://leetcode.com/problems/first-missing-positive/description/
 *
 * algorithms
 * Hard (28.37%)
 * Total Accepted:    218.8K
 * Total Submissions: 753K
 * Testcase Example:  '[1,2,0]'
 *
 * Given an unsorted integer array, find the smallest missing positive
 * integer.
 *
 * Example 1:
 *
 * Input: [1,2,0]
 * Output: 3
 *
 * Example 2:
 *
 * Input: [3,4,-1,1]
 * Output: 2
 *
 * Example 3:
 *
 * Input: [7,8,9,11,12]
 * Output: 1
 *
 * Note:
 *
 * Your algorithm should run in O(n) time and uses constant extra space.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function firstMissingPositive(nums) {
  let num = 1;
  const len = nums.length;
  if (len === 0) {
    return num;
  }

  const numsSet = new Set(nums);
  while (num <= len) {
    if (!numsSet.has(num)) {
      return num;
    }
    num += 1;
  }

  return num;
};
