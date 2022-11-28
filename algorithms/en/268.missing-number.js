/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 *
 * https://leetcode.com/problems/missing-number/description/
 *
 * algorithms
 * Easy (47.70%)
 * Total Accepted:    255.5K
 * Total Submissions: 534.8K
 * Testcase Example:  '[3,0,1]'
 *
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
 * find the one that is missing from the array.
 *
 * Example 1:
 *
 * Input: [3,0,1]
 * Output: 2
 *
 * Example 2:
 *
 * Input: [9,6,4,2,3,5,7,0,1]
 * Output: 8
 *
 * Note:
 * Your algorithm should run in linear runtime complexity. Could you implement
 * it using only constant extra space complexity?
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function missingNumber(nums) {
  const len = nums.length;
  let rest = len;
  for (let i = 0; i < len; i += 1) {
    // 3 ^ 0 ^ 1 ^ 3 ^ 0 ^ 1 ^ 2 = 2
    rest = rest ^ i ^ nums[i];
  }
  return rest;
};
