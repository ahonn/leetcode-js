/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 *
 * https://leetcode.com/problems/permutations/description/
 *
 * algorithms
 * Medium (53.79%)
 * Total Accepted:    405.2K
 * Total Submissions: 720.1K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a collection of distinct integers, return all possible permutations.
 *
 * Example:
 *
 * Input: [1,2,3]
 * Output:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function permute(nums) {
  const len = nums.length;
  const ans = [];
  const dfs = (numbers, start) => {
    if (start >= len) {
      ans.push(numbers);
    }
    for (let i = start; i < len; i += 1) {
      const next = numbers.slice();
      const swap = next[i];
      next[i] = next[start];
      next[start] = swap;

      dfs(next, start + 1);
    }
  };

  dfs(nums, 0);
  return ans;
};
