/*
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (37.77%)
 * Total Accepted:    850.6K
 * Total Submissions: 2.3M
 * Testcase Example:  '[3,2,4]\n6'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 *
 *
 * Example:
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function twoSum(nums, target) {
  const numsMap = {};
  const len = nums.length;
  for (let i = 0; i < len; i += 1) {
    const currentNum = nums[i];
    const targetNum = target - currentNum;
    const targetIndex = numsMap[targetNum];
    if (targetIndex !== undefined) {
      return [targetIndex, i];
    }
    numsMap[currentNum] = i;
  }
};
