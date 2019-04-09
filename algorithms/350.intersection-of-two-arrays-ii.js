/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 *
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
 *
 * algorithms
 * Easy (46.94%)
 * Total Accepted:    189.3K
 * Total Submissions: 400.7K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * Given two arrays, write a function to compute their intersection.
 *
 * Example 1:
 *
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2,2]
 *
 * Example 2:
 *
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [4,9]
 *
 * Note:
 *
 * Each element in the result should appear as many times as it shows in both
 * arrays.
 * The result can be in any order.
 *
 * Follow up:
 *
 * What if the given array is already sorted? How would you optimize your
 * algorithm?
 * What if nums1's size is small compared to nums2's size? Which algorithm is
 * better?
 * What if elements of nums2 are stored on disk, and the memory is limited such
 * that you cannot load all elements into the memory at once?
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function intersect(nums1, nums2) {
  let longNums = nums1;
  let shortNums = nums2;

  if (longNums.length < shortNums.length) {
    longNums = nums2;
    shortNums = nums1;
  }

  const numsMap = new Map();
  for (let i = 0; i < longNums.length; i += 1) {
    const n = longNums[i];
    if (numsMap.has(n)) {
      numsMap.set(n, numsMap.get(n) + 1);
    } else {
      numsMap.set(n, 1);
    }
  }

  const ans = [];
  for (let i = 0; i < shortNums.length; i += 1) {
    const n = shortNums[i];
    if (numsMap.has(n) && numsMap.get(n) > 0) {
      ans.push(n);
      numsMap.set(n, numsMap.get(n) - 1);
    }
  }

  return ans;
};
