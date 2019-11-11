/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 *
 * https://leetcode.com/problems/word-ladder/description/
 *
 * algorithms
 * Medium (23.21%)
 * Total Accepted:    319.3K
 * Total Submissions: 1.2M
 * Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
 *
 * Given two words (beginWord and endWord), and a dictionary's word list, find
 * the length of shortest transformation sequence from beginWord to endWord,
 * such that:
 *
 * Only one letter can be changed at a time.
 * Each transformed word must exist in the word list. Note that beginWord is
 * not a transformed word.
 *
 * Note:
 *
 * Return 0 if there is no such transformation sequence.
 * All words have the same length.
 * All words contain only lowercase alphabetic characters.
 * You may assume no duplicates in the word list.
 * You may assume beginWord and endWord are non-empty and are not the same.
 *
 * Example 1:
 *
 * Input:
 * beginWord = "hit",
 * endWord = "cog",
 * wordList = ["hot","dot","dog","lot","log","cog"]
 *
 * Output: 5
 *
 * Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" ->
 * "dog" -> "cog",
 * return its length 5.
 *
 * Example 2:
 *
 * Input:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 *
 * Output: 0
 *
 * Explanation: The endWord "cog" is not in wordList, therefore no possible
 * transformation.
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = function ladderLength(beginWord, endWord, wordList) {
  let beginSet = new Set([beginWord]);
  let endSet = new Set([endWord]);
  const wordListSet = new Set(wordList);

  if (wordListSet.size === 0 || !wordListSet.has(endWord)) {
    return 0;
  }

  let length = 1;
  while (beginSet.size && endSet.size) {
    if (beginSet.size > endSet.size) {
      [beginSet, endSet] = [endSet, beginSet];
    }

    const current = new Set();
    for (const word of beginSet) {
      for (let i = 0; i < word.length; i += 1) {
        const prefix = word.substr(0, i);
        const suffix = word.substr(i + 1);
        for (let j = 0; j < 26; j += 1) {
          const char = String.fromCharCode(97 + j);
          const target = prefix + char + suffix;

          if (endSet.has(target)) {
            return length + 1;
          }
          if (wordListSet.has(target)) {
            current.add(target);
            wordListSet.delete(target);
          }
        }
      }
    }
    beginSet = current;
    length += 1;
  }
  return 0;
};
