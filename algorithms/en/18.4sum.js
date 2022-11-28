/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 *
 * https://leetcode.com/problems/4sum/description/
 *
 * algorithms
 * Medium (29.90%)
 * Total Accepted:    220.2K
 * Total Submissions: 733.6K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * Given an array nums of n integers and an integer target, are there elements
 * a, b, c, and d in nums such that a + b + c + d = target? Find all unique
 * quadruplets in the array which gives the sum of target.
 *
 * Note:
 *
 * The solution set must not contain duplicate quadruplets.
 *
 * Example:
 *
 * Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
 *
 * A solution set is:
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function fourSum(nums, target) {
  nums = nums.sort((a, b) => a - b);
  const len = nums.length;
  const set = new Set();
  const ans = [];
  for (let i = 0; i < len; i += 1) {
    const a = nums[i];

    for (let j = i + 1; j < len; j += 1) {
      const b = nums[j];
      const t = target - a - b;

      let start = j + 1;
      let end = len - 1;
      while (start < end) {
        const c = nums[start];
        const d = nums[end];

        if (c + d === t) {
          const arr = [a, b, c, d];
          const key = arr.join('_');
          if (!set.has(key)) {
            set.add(key);
            ans.push(arr);
          }

          start += 1;
          end -= 1;
        } else if (c + d < t) {
          start += 1;
        } else {
          end -= 1;
        }
      }
    }
  }
  return ans;
};
