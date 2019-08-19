/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 *
 * https://leetcode.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (45.19%)
 * Total Accepted:    375.3K
 * Total Submissions: 774.4K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * Given an array of strings, group anagrams together.
 *
 * Example:
 *
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * Output:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 *
 * Note:
 *
 * All inputs will be in lowercase.
 * The order of your output does not matter.
 *
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function groupAnagrams(strs) {
  const groupsMap = {};
  for (const str of strs) {
    const count = new Uint16Array(26);
    for (const char of str) {
      const index = char.charCodeAt() - 97;
      count[index] += 1;
    }

    const key = count.join('#');
    if (groupsMap[key] === undefined) {
      groupsMap[key] = [str];
    } else {
      groupsMap[key].push(str);
    }
  }
  return Object.values(groupsMap);
};
