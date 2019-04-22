/*
 * @lc app=leetcode id=963 lang=javascript
 *
 * [963] Minimum Area Rectangle II
 *
 * https://leetcode.com/problems/minimum-area-rectangle-ii/description/
 *
 * algorithms
 * Medium (42.74%)
 * Total Accepted:    3.7K
 * Total Submissions: 8.5K
 * Testcase Example:  '[[1,2],[2,1],[1,0],[0,1]]'
 *
 * Given a set of points in the xy-plane, determine the minimum area of any
 * rectangle formed from these points, with sides not necessarily parallel to
 * the x and y axes.
 *
 * If there isn't any rectangle, return 0.
 *
 * Example 1:
 *
 * Input: [[1,2],[2,1],[1,0],[0,1]]
 * Output: 2.00000
 * Explanation: The minimum area rectangle occurs at [1,2],[2,1],[1,0],[0,1],
 * with an area of 2.
 *
 * Example 2:
 *
 * Input: [[0,1],[2,1],[1,1],[1,0],[2,0]]
 * Output: 1.00000
 * Explanation: The minimum area rectangle occurs at [1,0],[1,1],[2,1],[2,0],
 * with an area of 1.
 *
 * Example 3:
 *
 * Input: [[0,3],[1,2],[3,1],[1,3],[2,1]]
 * Output: 0
 * Explanation: There is no possible rectangle to form from these points.
 *
 * Example 4:
 *
 * Input: [[3,1],[1,1],[0,1],[2,1],[3,3],[3,2],[0,2],[2,3]]
 * Output: 2.00000
 * Explanation: The minimum area rectangle occurs at [2,1],[2,3],[3,3],[3,1],
 * with an area of 2.
 *
 * Note:
 *
 * 1 <= points.length <= 50
 * 0 <= points[i][0] <= 40000
 * 0 <= points[i][1] <= 40000
 * All points are distinct.
 * Answers within 10^-5 of the actual value will be accepted as correct.
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
const minAreaFreeRect = function minAreaFreeRect(points) {
  const linesMap = new Map();

  for (let i = 0; i < points.length; i += 1) {
    const [x1, y1] = points[i];
    for (let j = i + 1; j < points.length; j += 1) {
      const [x2, y2] = points[j];

      const l = ((x1 - x2) ** 2) + ((y1 - y2) ** 2);
      const cx = (x1 + x2) / 2;
      const cy = (y1 + y2) / 2;
      const key = `${l}-${cx}-${cy}`;

      const line = linesMap.get(key) || [];
      linesMap.set(key, [...line, [[x1, y1], [x2, y2]]]);
    }
  }

  let minArea = Infinity;
  for (const [, lines] of linesMap) {
    if (lines.length > 1) {
      for (let i = 0; i < lines.length; i += 1) {
        const [[x0, y0]] = lines[i];

        for (let j = i + 1; j < lines.length; j += 1) {
          const [[x1, y1], [x2, y2]] = lines[j];

          const d1 = Math.sqrt(((x0 - x1) ** 2) + ((y0 - y1) ** 2));
          const d2 = Math.sqrt(((x0 - x2) ** 2) + ((y0 - y2) ** 2));
          const area = d1 * d2;

          if (area < minArea) {
            minArea = area;
          }
        }
      }
    }
  }

  return minArea === Infinity ? 0 : minArea;
};
