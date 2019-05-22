/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 *
 * https://leetcode.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (43.04%)
 * Total Accepted:    367.2K
 * Total Submissions: 827K
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * Given n non-negative integers a1, a2, ..., an , where each represents a
 * point at coordinate (i, ai). n vertical lines are drawn such that the two
 * endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together
 * with x-axis forms a container, such that the container contains the most
 * water.
 *
 * Note: You may not slant the container and n is at least 2.
 *
 * The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In
 * this case, the max area of water (blue section) the container can contain is
 * 49.
 *
 * Example:
 *
 * Input: [1,8,6,2,5,4,8,3,7]
 * Output: 49
 *
 */
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function maxArea(height) {
  const len = height.length;
  if (len === 2) {
    return Math.min(...height);
  }

  let max = 0;
  let left = 0;
  let right = len - 1;
  while (left < right && right < len) {
    const y = Math.min(height[left], height[right]);
    const x = right - left;
    const val = x * y;

    if (val > max) {
      max = val;
    }

    if (height[left] > height[right]) {
      right -= 1;
    } else {
      left += 1;
    }
  }
  return max;
};
