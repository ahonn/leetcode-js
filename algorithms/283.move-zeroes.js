/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 *
 * https://leetcode.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (53.77%)
 * Total Accepted:    436.2K
 * Total Submissions: 810.2K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * Given an array nums, write a function to move all 0's to the end of it while
 * maintaining the relative order of the non-zero elements.
 *
 * Example:
 *
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 * Note:
 *
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function moveZeroes(nums) {
  const len = nums.length;
  let index = 0;
  let count = 0;

  while (count < len) {
    if (nums[index] === 0) {
      nums.splice(index, 1);
      nums.push(0);
    } else {
      index += 1;
    }
    count += 1;
  }

  return nums;
};
