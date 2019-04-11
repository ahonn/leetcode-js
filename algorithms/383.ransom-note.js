/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 *
 * https://leetcode.com/problems/ransom-note/description/
 *
 * algorithms
 * Easy (49.41%)
 * Total Accepted:    107.2K
 * Total Submissions: 216.5K
 * Testcase Example:  '"a"\n"b"'
 *
 * Given an arbitrary ransom note string and another string containing letters
 * from all the magazines, write a function that will return true if the
 * ransom
 * note can be constructed from the magazines ; otherwise, it will return
 * false.
 *
 * Each letter in the magazine string can only be used once in your ransom
 * note.
 *
 * Note:
 * You may assume that both strings contain only lowercase letters.
 *
 * canConstruct("a", "b") -> false
 * canConstruct("aa", "ab") -> false
 * canConstruct("aa", "aab") -> true
 *
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function canConstruct(ransomNote, magazine) {
  if (ransomNote === '') {
    return true;
  }

  const chars = new Uint16Array(26);
  for (let i = 0; i < magazine.length; i += 1) {
    const index = magazine.charCodeAt(i) - 97;
    chars[index] += 1;
  }

  for (let i = 0; i < ransomNote.length; i += 1) {
    const index = ransomNote.charCodeAt(i) - 97;
    if (chars[index] <= 0) {
      return false;
    }
    chars[index] -= 1;
  }
  return true;
};
