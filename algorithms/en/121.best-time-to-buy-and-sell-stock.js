/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (46.18%)
 * Total Accepted:    436.5K
 * Total Submissions: 945.4K
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * Say you have an array for which the ith element is the price of a given
 * stock on day i.
 *
 * If you were only permitted to complete at most one transaction (i.e., buy
 * one and sell one share of the stock), design an algorithm to find the
 * maximum profit.
 *
 * Note that you cannot sell a stock before you buy one.
 *
 * Example 1:
 *
 *
 * Input: [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit
 * = 6-1 = 5.
 * Not 7-1 = 6, as selling price needs to be larger than buying price.
 *
 *
 * Example 2:
 *
 *
 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.
 *
 *
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function maxProfit(prices) {
  const len = prices.length;

  let max = 0;
  let buy = prices[0];
  for (let i = 1; i < len; i += 1) {
    const sell = prices[i];
    if (sell < buy) {
      buy = sell;
    } else {
      const profit = sell - buy;
      if (profit > max) {
        max = profit;
      }
    }
  }
  return max;
};
