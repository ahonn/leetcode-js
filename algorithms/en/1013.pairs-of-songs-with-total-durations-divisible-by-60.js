// In a list of songs, the i-th song has a duration of time[i] seconds.

// Return the number of pairs of songs for which their total duration in seconds is divisible by 60.  Formally, we want the number of indices i < j with (time[i] + time[j]) % 60 == 0.

// Example 1:

// Input: [30,20,150,100,40]
// Output: 3
// Explanation: Three pairs have a total duration divisible by 60:
// (time[0] = 30, time[2] = 150): total duration 180
// (time[1] = 20, time[3] = 100): total duration 120
// (time[1] = 20, time[4] = 40): total duration 60
// Example 2:

// Input: [60,60,60]
// Output: 3
// Explanation: All three pairs have a total duration of 120, which is divisible by 60.

// Note:

// 1 <= time.length <= 60000
// 1 <= time[i] <= 500
/**
 * @param {number[]} time
 * @return {number}
 */
const numPairsDivisibleBy60 = function numPairsDivisibleBy60(time) {
  const len = time.length;
  let count = 0;

  if (len === 0) {
    return count;
  }

  for (let i = 0; i < len; i += 1) {
    for (let j = i + 1; j < len; j += 1) {
      if ((time[i] + time[j]) % 60 === 0) {
        count += 1;
      }
    }
  }

  return count;
};

[
  [30, 20, 150, 100, 40],
  [60, 60, 60],
].forEach((time) => {
  console.log(numPairsDivisibleBy60(time));
});
