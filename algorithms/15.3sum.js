/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (23.59%)
 * Total Accepted:    546.5K
 * Total Submissions: 2.3M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 *
 * Note:
 *
 * The solution set must not contain duplicate triplets.
 *
 * Example:
 *
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 *
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function threeSum(nums) {
  const len = nums.length;
  if (len === 0) {
    return [];
  }

  const ans = [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < len; i += 1) {
    const c = nums[i];
    // break when there is no negative number
    if (c > 0) {
      break;
    }
    // skip same value c
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let begin = i + 1;
    let end = len - 1;
    while (begin < end) {
      const a = nums[begin];
      const b = nums[end];
      const current = a + b + c;

      if (current === 0) {
        ans.push([a, b, c]);
        // skip same value a
        while (begin < end && nums[begin] === nums[begin + 1]) {
          begin += 1;
        }
        // skip same value b
        while (begin < end && nums[end] === nums[end - 1]) {
          end -= 1;
        }
        begin += 1;
        end -= 1;
      } else if (current < 0) {
        begin += 1;
      } else {
        end -= 1;
      }
    }
  }

  return ans;
};
