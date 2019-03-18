/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 *
 * https://leetcode.com/problems/contains-duplicate/description/
 *
 * algorithms
 * Easy (50.91%)
 * Total Accepted:    308.5K
 * Total Submissions: 604.7K
 * Testcase Example:  '[1,2,3,1]'
 *
 * Given an array of integers, find if the array contains any duplicates.
 *
 * Your function should return true if any value appears at least twice in the
 * array, and it should return false if every element is distinct.
 *
 * Example 1:
 *
 *
 * Input: [1,2,3,1]
 * Output: true
 *
 * Example 2:
 *
 *
 * Input: [1,2,3,4]
 * Output: false
 *
 * Example 3:
 *
 *
 * Input: [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 *
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function containsDuplicate(nums) {
  const numsSet = new Set();
  const len = nums.length;

  for (let i = 0; i < len; i += 1) {
    const n = nums[i];
    if (numsSet.has(n)) {
      return true;
    }
    numsSet.add(n);
  }
  return false;
};
