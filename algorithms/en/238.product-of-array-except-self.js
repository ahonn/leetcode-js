/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 *
 * https://leetcode.com/problems/product-of-array-except-self/description/
 *
 * algorithms
 * Medium (54.11%)
 * Total Accepted:    365.9K
 * Total Submissions: 629.9K
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given an array nums of n integers where n > 1,  return an array output such
 * that output[i] is equal to the product of all the elements of nums except
 * nums[i].
 *
 * Example:
 *
 * Input:  [1,2,3,4]
 * Output: [24,12,8,6]
 *
 *
 * Note: Please solve it without division and in O(n).
 *
 * Follow up:
 * Could you solve it with constant space complexity? (The output array does
 * not count as extra space for the purpose of space complexity analysis.)
 *
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function productExceptSelf(nums) {
  const len = nums.length;

  const left = new Array(len).fill(1);
  const right = new Array(len).fill(1);
  for (let i = 1; i < len; i += 1) {
    left[i] = left[i - 1] * nums[i - 1];
    right[len - i - 1] = right[len - i] * nums[len - i];
  }

  const result = [];
  for (let i = 0; i < len; i += 1) {
    result[i] = left[i] * right[i];
  }

  return result;
};
