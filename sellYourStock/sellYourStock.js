/*
You are given an array of stock prices for consecutive days. 
Your goal is to maximize your profit by buying and selling the stock at different days. 
You can only buy one stock and sell it at a later day. If it's not possible to make a profit, you should return 0.

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

let pricesArray, maxProfit;
const findMaxProfit = (pricesArray) => {
  let minPrice = pricesArray[0];
  let maxProfit = 0;
  for (let i = 1; i < pricesArray.length; i++) {
    if (minPrice >= pricesArray[i]) minPrice = pricesArray[i];
    let currentProfit = pricesArray[i] - minPrice;
    if (maxProfit < currentProfit) maxProfit = currentProfit;
  }
  return maxProfit;
};
pricesArray = [7, 2, 5, 3, 6, 1];
maxProfit = findMaxProfit(pricesArray);

console.log(maxProfit);
