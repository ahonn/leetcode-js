/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 *
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 *
 * algorithms
 * Medium (53.73%)
 * Total Accepted:    292.3K
 * Total Submissions: 501.9K
 * Testcase Example:  '[1,1,1,2,2,3]\n2'
 *
 * Given a non-empty array of integers, return the k most frequent elements.
 *
 * Example 1:
 *
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 *
 * Example 2:
 *
 * Input: nums = [1], k = 1
 * Output: [1]
 *
 * Note:
 *
 * You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
 * Your algorithm's time complexity must be better than O(n log n), where n is
 * the array's size.
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function topKFrequent(nums, k) {
  const counts = new Map();
  for (const n of nums) {
    const count = counts.get(n) || 0;
    counts.set(n, count + 1);
  }

  const buckets = [];
  for (const n of counts.keys()) {
    const count = counts.get(n);
    if (buckets[count] === undefined) {
      buckets[count] = [];
    }
    buckets[count].push(n);
  }

  let result = [];
  for (let i = buckets.length - 1; i > 0 && result.length < k; i -= 1) {
    const top = buckets[i] || [];
    result = result.concat(top);
  }

  return result;
};
