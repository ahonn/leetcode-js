/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 *
 * https://leetcode.com/problems/sort-colors/description/
 *
 * algorithms
 * Medium (41.49%)
 * Total Accepted:    348.4K
 * Total Submissions: 809.4K
 * Testcase Example:  '[2,0,2,1,1,0]'
 *
 * Given an array with n objects colored red, white or blue, sort them in-place
 * so that objects of the same color are adjacent, with the colors in the order
 * red, white and blue.
 *
 * Here, we will use the integers 0, 1, and 2 to represent the color red,
 * white, and blue respectively.
 *
 * Note: You are not suppose to use the library's sort function for this
 * problem.
 *
 * Example:
 *
 * Input: [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 *
 * Follow up:
 *
 * A rather straight forward solution is a two-pass algorithm using counting
 * sort.
 * First, iterate the array counting number of 0's, 1's, and 2's, then
 * overwrite array with total number of 0's, then 1's and followed by 2's.
 * Could you come up with a one-pass algorithm using only constant space?
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function sortColors(nums) {
  const len = nums.length;
  if (len <= 1) {
    return nums;
  }
  let zeroIndex = 0;
  let secondIndex = len - 1;

  for (let i = 0; i <= secondIndex; i += 1) {
    while (nums[i] === 2 && i < secondIndex) {
      const temp = nums[secondIndex];
      nums[secondIndex] = nums[i];
      nums[i] = temp;
      secondIndex -= 1;
    }
    while (nums[i] === 0 && i > zeroIndex) {
      const temp = nums[zeroIndex];
      nums[zeroIndex] = nums[i];
      nums[i] = temp;
      zeroIndex += 1;
    }
  }

  return nums;
};
