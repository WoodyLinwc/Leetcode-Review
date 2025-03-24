/**
 * Problem: Best Time to Buy and Sell Stock
 * Difficulty: easy
 * Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock
 * Type: array
 * 
 * Description:
 * [Add problem description here]
 *
 * Example:
 * [Add example input/output here]
 */

/**
 * Your solution goes here
 */

var maxProfit = function(prices) {
    let min = Infinity;
    let max = 0;

    for(let i = 0; i<prices.length; i++){
        if(prices[i] < min){
            min = prices[i];
        }

        let profit = prices[i] - min;
        max = Math.max(profit, max);
    }
    return max;
};

// Time Complexity: O(n)
// Space Complexity: O(n)

// Test cases
