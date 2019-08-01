/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 *
 * https://leetcode.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (42.21%)
 * Total Accepted:    314.4K
 * Total Submissions: 716.7K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * Given n non-negative integers representing an elevation map where the width
 * of each bar is 1, compute how much water it is able to trap after raining.
 *
 * The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 * In this case, 6 units of rain water (blue section) are being trapped. Thanks
 * Marcos for contributing this image!
 *
 * Example:
 *
 * Input: [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 */
/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function trap(height) {
  const len = height.length;
  const stack = [];

  let i = 0;
  let water = 0;
  while (i < len) {
    const top = stack[stack.length - 1];
    if (stack.length === 0 || height[i] <= height[top]) {
      stack.push(i);
      i += 1;
    } else {
      stack.pop();
      if (stack.length === 0) {
        continue;
      }

      const second = stack[stack.length - 1];
      const depth = Math.min(height[i], height[second]) - height[top];
      const width = i - second - 1;
      water += (depth * width);
    }
  }
  return water;
};
