/**
 * Problem: Palindrome Number
 * Difficulty: easy
 * Link: https://leetcode.com/problems/palindrome-number/
 * Type: string
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

var isPalindrome = function(x) {
    return x.toString() === x.toString().split("").reverse().join("");
};

// Time Complexity: O(n)
// Space Complexity: O(n)

// Test cases
