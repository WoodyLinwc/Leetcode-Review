/**
 * Problem: Climbing Stairs
 * Difficulty: easy
 * Link: https://leetcode.com/problems/climbing-stairs/
 * Type: dynamic-programming
 * 
 * Description:
 * [Add problem description here]
 *
 * Example:
 * [Add example input/output here]
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 */

/**
 * Your solution goes here
 */
// var climbStairs = function(n) {
//     if(n <= 2) return n;
//     return climbStairs(n-1) + climbStairs(n-2);
// };


var climbStairs = function(n) {
    if(n <= 2) return n;

    let prev1 = 1, prev2 = 2;

    for(let i = 3; i <= n; i++){
        let cur = prev1 + prev2;
        prev1 = prev2;
        prev2 = cur;
    }

    return prev2;
};

// Time Complexity: 
// Space Complexity: 

// Test cases
