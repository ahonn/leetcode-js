// On an infinite plane, a robot initially stands at (0, 0) and faces north.  The robot can receive one of three instructions:

// "G": go straight 1 unit;
// "L": turn 90 degrees to the left;
// "R": turn 90 degress to the right.
// The robot performs the instructions given in order, and repeats them forever.

// Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

// Example 1:

// Input: "GGLLGG"
// Output: true
// Explanation:
// The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
// When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.
// Example 2:

// Input: "GG"
// Output: false
// Explanation:
// The robot moves north indefinetely.
// Example 3:

// Input: "GL"
// Output: true
// Explanation:
// The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...

// Note:

// 1 <= instructions.length <= 100
// instructions[i] is in {'G', 'L', 'R'}
/**
 * @param {string} instructions
 * @return {boolean}
 */
const isRobotBounded = function isRobotBounded(instructions) {
  const len = instructions.length;
  const faces = {
    N: 0,
    E: 1,
    S: 2,
    W: 3,
  };

  let x = 0;
  let y = 0;
  let face = faces.N;
  for (let t = 0; t < 4; t += 1) {
    for (let i = 0; i < len; i += 1) {
      const move = instructions[i];
      if (move === 'L') {
        face = (4 + face - 1) % 4;
      } else if (move === 'R') {
        face = (face + 1) % 4;
      } else if (face === faces.N) {
        y += 1;
      } else if (face === faces.E) {
        x -= 1;
      } else if (face === faces.S) {
        y -= 1;
      } else if (face === faces.W) {
        x += 1;
      }
    }
    if (x === 0 && y === 0) {
      return true;
    }
  }
  return false;
};
