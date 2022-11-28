// Students are asked to stand in non-decreasing order of heights for an annual photo.

// Return the minimum number of students not standing in the right positions.  (This is the number of students that must move in order for all students to be standing in non-decreasing order of height.)

// Example 1:

// Input: [1,1,4,2,1,3]
// Output: 3
// Explanation:
// Students with heights 4, 3 and the last 1 are not standing in the right positions.

// Note:
// 1 <= heights.length <= 100
// 1 <= heights[i] <= 100
/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function heightChecker(heights) {
  const len = heights.length;
  const sortedHeights = heights.slice().sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < len; i += 1) {
    if (sortedHeights[i] !== heights[i]) {
      count += 1;
    }
  }
  return count;
};
