/*
 * @lc app=leetcode id=130 lang=javascript
 *
 * [130] Surrounded Regions
 *
 * https://leetcode.com/problems/surrounded-regions/description/
 *
 * algorithms
 * Medium (22.25%)
 * Total Accepted:    172.8K
 * Total Submissions: 701.6K
 * Testcase Example:  '[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]'
 *
 * Given a 2D board containing 'X' and 'O' (the letter O), capture all regions
 * surrounded by 'X'.
 *
 * A region is captured by flipping all 'O's into 'X's in that surrounded
 * region.
 *
 * Example:
 *
 * X X X X
 * X O O X
 * X X O X
 * X O X X
 *
 * After running your function, the board should be:
 *
 * X X X X
 * X X X X
 * X X X X
 * X O X X
 *
 * Explanation:
 *
 * Surrounded regions shouldn’t be on the border, which means that any 'O' on
 * the border of the board are not flipped to 'X'. Any 'O' that is not on the
 * border and it is not connected to an 'O' on the border will be flipped to
 * 'X'. Two cells are connected if they are adjacent cells connected
 * horizontally or vertically.
 *
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = function solve(board) {
  const height = board.length;
  const width = height && board[0].length;
  if (height === 0 || (height < 3 && width < 3)) {
    return [];
  }

  const set = new Set();
  function search(x, y) {
    if (x < 0 || x >= height || y < 0 || y >= width || set.has(`${x}-${y}`)) {
      return;
    }
    set.add(`${x}-${y}`);

    if (board[x][y] === 'O') {
      board[x][y] = '#';
      search(x + 1, y);
      search(x - 1, y);
      search(x, y + 1);
      search(x, y - 1);
    }
  }

  for (let i = 0; i < height; i += 1) {
    search(i, 0);
    search(i, width - 1);
  }
  for (let i = 0; i < width; i += 1) {
    search(0, i);
    search(height - 1, i);
  }

  for (let i = 0; i < height; i += 1) {
    for (let j = 0; j < width; j += 1) {
      switch (board[i][j]) {
        case 'O':
          board[i][j] = 'X';
          break;
        case '#':
          board[i][j] = 'O';
          break;
        default:
      }
    }
  }

  return board;
};
