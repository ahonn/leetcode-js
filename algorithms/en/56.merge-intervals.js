/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 *
 * https://leetcode.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (35.03%)
 * Total Accepted:    392.2K
 * Total Submissions: 1.1M
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * Given a collection of intervals, merge all overlapping intervals.
 *
 * Example 1:
 *
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into
 * [1,6].
 *
 * Example 2:
 *
 * Input: [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 *
 * NOTE: input types have been changed on April 15, 2019. Please reset to
 * default code definition to get new method signature.
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function(intervals) {
  const len = intervals.length;

  if (len <= 1) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);
  const ans = [intervals[0]];
  for (let i = 1; i < len; i += 1) {
    const cur = intervals[i];
    const pre = ans[ans.length - 1];
    if (pre[1] >= cur[0]) {
      if (pre[1] < cur[1]) {
        pre[1] = cur[1];
      }
    } else {
      ans.push(cur);
    }
  }
  return ans;
};
