/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 *
 * https://leetcode.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (41.64%)
 * Total Accepted:    346.3K
 * Total Submissions: 756.6K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * Given an array nums of n integers and an integer target, find three integers
 * in nums such that the sum is closest to target. Return the sum of the three
 * integers. You may assume that each input would have exactly one solution.
 *
 * Example:
 *
 *
 * Given array nums = [-1, 2, 1, -4], and target = 1.
 *
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function threeSumClosest(nums, target) {
  nums = nums.sort((a, b) => a - b);
  const len = nums.length;

  let minDiff = Infinity;
  let closest = 0;

  for (let i = 0; i < len; i += 1) {
    const c = nums[i];

    let begin = i + 1;
    let end = len - 1;
    while (begin < end) {
      const a = nums[begin];
      const b = nums[end];
      const sum = a + b + c;
      const diff = Math.abs(target - sum);

      if (diff < minDiff) {
        minDiff = diff;
        closest = sum;
      }

      if (sum < target) {
        begin += 1;
      } else {
        end -= 1;
      }
    }
  }

  return closest;
};
