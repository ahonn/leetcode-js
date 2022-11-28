// In a warehouse, there is a row of barcodes, where the i-th barcode is barcodes[i].

// Rearrange the barcodes so that no two adjacent barcodes are equal.  You may return any answer, and it is guaranteed an answer exists.

// Example 1:

// Input: [1,1,1,2,2,2]
// Output: [2,1,2,1,2,1]
// Example 2:

// Input: [1,1,1,1,2,2,3,3]
// Output: [1,3,1,3,2,1,2,1]

// Note:
// 1 <= barcodes.length <= 10000
// 1 <= barcodes[i] <= 10000
/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
const rearrangeBarcodes = function rearrangeBarcodes(barcodes) {
  barcodes = barcodes.sort((a, b) => a - b);

  const ret = [];
  const len = barcodes.length;
  const halfLen = len >> 1;
  const odd = halfLen * 2 < len;
  for (let i = 0; i < halfLen; i += 1) {
    const x = barcodes[i];
    const y = barcodes[halfLen + i + (odd ? 1 : 0)];
    if (x !== ret[ret.length - 1]) {
      ret.push(x, y);
    } else {
      ret.push(y, x);
    }
  }

  if (odd) {
    const mid = barcodes[halfLen];
    if (mid !== ret[0]) {
      ret.unshift(mid);
    } else {
      ret.push(mid);
    }
  }

  return ret;
};
