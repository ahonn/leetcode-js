/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 *
 * https://leetcode.com/problems/min-stack/description/
 *
 * algorithms
 * Easy (35.67%)
 * Total Accepted:    269.9K
 * Total Submissions: 756.8K
 * Testcase Example:  '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]'
 *
 *
 * Design a stack that supports push, pop, top, and retrieving the minimum
 * element in constant time.
 *
 * push(x) -- Push element x onto stack.
 *
 * pop() -- Removes the element on top of the stack.
 *
 * top() -- Get the top element.
 *
 * getMin() -- Retrieve the minimum element in the stack.
 *
 * Example:
 *
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> Returns -3.
 * minStack.pop();
 * minStack.top();      --> Returns 0.
 * minStack.getMin();   --> Returns -2.
 */
/**
 * initialize your data structure here.
 */
const MinStack = function MinStack() {
  this.stack = [];
  this.min = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function push(x) {
  this.stack.push(x);

  if (this.getMin() === undefined || x <= this.getMin()) {
    this.min.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function pop() {
  const el = this.stack.pop();

  if (this.getMin() === el) {
    this.min.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function top() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function getMin() {
  return this.min[this.min.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
