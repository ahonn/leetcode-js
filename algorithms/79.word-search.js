/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 *
 * https://leetcode.com/problems/word-search/description/
 *
 * algorithms
 * Medium (30.57%)
 * Total Accepted:    326.7K
 * Total Submissions: 1M
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * Given a 2D board and a word, find if the word exists in the grid.
 *
 * The word can be constructed from letters of sequentially adjacent cell,
 * where "adjacent" cells are those horizontally or vertically neighboring. The
 * same letter cell may not be used more than once.
 *
 * Example:
 *
 * board =
 * [
 * ⁠ ['A','B','C','E'],
 * ⁠ ['S','F','C','S'],
 * ⁠ ['A','D','E','E']
 * ]
 *
 * Given word = "ABCCED", return true.
 * Given word = "SEE", return true.
 * Given word = "ABCB", return false.
 *
 *
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function exist(board, word) {
  const wordLen = word.length;

  const searchAt = (i, j, index) => {
    if (index === wordLen) {
      return true;
    }
    if (i < 0 || i >= board.length || j < 0 || j >= board[i].length) {
      return false;
    }

    const char = board[i][j];
    if (char !== '#' && char === word[index]) {
      board[i][j] = '#';
      if (
        searchAt(i - 1, j, index + 1)
        || searchAt(i + 1, j, index + 1)
        || searchAt(i, j - 1, index + 1)
        || searchAt(i, j + 1, index + 1)
      ) {
        return true;
      }
      board[i][j] = char;
    }
    return false;
  };

  for (let i = 0; i < board.length; i += 1) {
    const row = board[i];
    for (let j = 0; j < row.length; j += 1) {
      const char = board[i][j];
      if (word.charAt(0) === char && searchAt(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};
