/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 *
 * https://leetcode.com/problems/contains-duplicate-ii/description/
 *
 * algorithms
 * Easy (34.80%)
 * Total Accepted:    186.3K
 * Total Submissions: 535.4K
 * Testcase Example:  '[1,2,3,1]\n3'
 *
 * Given an array of integers and an integer k, find out whether there are two
 * distinct indices i and j in the array such that nums[i] = nums[j] and the
 * absolute difference between i and j is at most k.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,1], k = 3
 * Output: true
 *
 * Example 2:
 *
 * Input: nums = [1,0,1,1], k = 1
 * Output: true
 *
 * Example 3:
 *
 * Input: nums = [1,2,3,1,2,3], k = 2
 * Output: false
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function containsNearbyDuplicate(nums, k) {
  const len = nums.length;
  if (len < 2 || k === 0) {
    return false;
  }

  const numsSet = new Set();
  for (let i = 0; i < len; i += 1) {
    const n = nums[i];
    if (i > k) {
      numsSet.delete(nums[i - k - 1]);
    }
    if (numsSet.has(n)) {
      return true;
    }
    numsSet.add(n);
  }

  return false;
};
