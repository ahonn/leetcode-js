// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和 / 或竖直方向上相邻的陆地连接形成。
// 此外，你可以假设该网格的四条边均被水包围。

// 示例 1：

// 输入：grid = [
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "0", "1", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "0", "0", "0"]
// ]
// 输出：1
// 示例 2：

// 输入：grid = [
//   ["1", "1", "0", "0", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "1", "0", "0"],
//   ["0", "0", "0", "1", "1"]
// ]
// 输出：3


// 提示：
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] 的值为 '0' 或 '1'

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length) {
      return false;
    }
    if (grid[i][j] === '0' || grid[i][j] === '2') {
      return false;
    }
    grid[i][j] = '2';
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
    return true;
  };

  let result = 0;
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (dfs(i, j)) {
        result += 1;
      }
    }
  }

  return result;
};
