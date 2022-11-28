/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 *
 * https://leetcode.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (51.53%)
 * Total Accepted:    350.5K
 * Total Submissions: 680K
 * Testcase Example:  '[3,2,3]'
 *
 * Given an array of size n, find the majority element. The majority element is
 * the element that appears more than ⌊ n/2 ⌋ times.
 *
 * You may assume that the array is non-empty and the majority element always
 * exist in the array.
 *
 * Example 1:
 *
 * Input: [3,2,3]
 * Output: 3
 *
 * Example 2:
 *
 * Input: [2,2,1,1,1,2,2]
 * Output: 2
 */
/**
 * https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function majorityElement(nums) {
  let majority = nums[0];
  let count = 1;

  const len = nums.length;
  const halfLen = len >> 1;
  for (let i = 1; i < len; i += 1) {
    if (majority === nums[i]) {
      count += 1;
    } else {
      count -= 1;
    }
    if (count > halfLen) {
      return majority;
    }

    if (count === 0) {
      majority = nums[i];
      count = 1;
    }
  }

  return majority;
};
