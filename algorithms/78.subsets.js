/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 *
 * https://leetcode.com/problems/subsets/description/
 *
 * algorithms
 * Medium (51.40%)
 * Total Accepted:    410.7K
 * Total Submissions: 748.3K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a set of distinct integers, nums, return all possible subsets (the
 * power set).
 *
 * Note: The solution set must not contain duplicate subsets.
 *
 * Example:
 *
 * Input: nums = [1,2,3]
 * Output:
 * [
 * ⁠ [3],
 *  [1],
 *  [2],
 *  [1,2,3],
 *  [1,3],
 *  [2,3],
 *  [1,2],
 *  []
 * ]
 *
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function subsets(nums) {
  const res = [];
  res.push([]);

  for (const n of nums) {
    const len = res.length;
    for (let i = 0; i < len; i += 1) {
      const temp = res[i].slice();
      temp.push(n);
      res.push(temp);
    }
  }

  return res;
};
