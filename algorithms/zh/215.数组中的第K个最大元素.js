/* eslint-disable no-use-before-define */
// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
// 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。

// 示例 1:

// 输入: [3, 2, 1, 5, 6, 4], k = 2
// 输出: 5
// 示例 2:

// 输入: [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4
// 输出: 4

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  function swap(heap, i, j) {
    const temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
  }

  function heapify(heap, i, len) {
    const left = i * 2 + 1;
    const right = i * 2 + 2;
    let largest = i;
    if (left < len && heap[left] > heap[largest]) {
      largest = left;
    }
    if (right < len && heap[right] > heap[largest]) {
      largest = right;
    }
    if (largest !== i) {
      swap(nums, i, largest);
      heapify(nums, largest, len);
    }
  }

  function buildMaxHeap(heap, len) {
    for (let i = Math.floor(len / 2); i >= 0; i -= 1) {
      heapify(heap, i, len);
    }
  }

  let heapSize = nums.length;
  buildMaxHeap(nums, heapSize);
  for (let i = nums.length - 1; i >= nums.length - k + 1; i -= 1) {
    swap(nums, 0, i);
    heapSize -= 1;
    heapify(nums, 0, heapSize);
  }

  return nums[0];
};
