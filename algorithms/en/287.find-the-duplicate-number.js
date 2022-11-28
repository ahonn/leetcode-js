/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function findDuplicate(nums) {
  const len = nums.length;
  const map = new Map();
  for (let i = 0; i < len; i += 1) {
    const num = nums[i];
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      return num;
    }
  }
};
