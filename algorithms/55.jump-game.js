/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 *
 * https://leetcode.com/problems/jump-game/description/
 *
 * algorithms
 * Medium (31.45%)
 * Total Accepted:    293.9K
 * Total Submissions: 905.9K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * Given an array of non-negative integers, you are initially positioned at the
 * first index of the array.
 *
 * Each element in the array represents your maximum jump length at that
 * position.
 *
 * Determine if you are able to reach the last index.
 *
 * Example 1:
 *
 * Input: [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last
 * index.
 *
 * Example 2:
 *
 * Input: [3,2,1,0,4]
 * Output: false
 * Explanation: You will always arrive at index 3 no matter what. Its
 * maximum
 * jump length is 0, which makes it impossible to reach the last index.
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function canJump(nums) {
  const len = nums.length;
  if (nums[0] === 0 && len !== 1) {
    return false;
  }

  let lastIndex = len - 1;
  for (let i = lastIndex - 1; i >= 0; i -= 1) {
    if (i + nums[i] >= lastIndex) {
      lastIndex = i;
    }
  }
  return lastIndex === 0;
};
