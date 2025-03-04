/**
 * Problem: Valid Parentheses
 * Difficulty: easy
 * Link: https://leetcode.com/problems/valid-parentheses/
 * Type: string
 * 
 * Description:
 * [Add problem description here]
 *
 * Example:
 * [Add example input/output here]
 * Input: s = "()[]{}"
 * Output: true
 * 
 * Input: s = "([])"
 * Output: true
 */

/**
 * Your solution goes here
 */
var isValid = function(s) {
    let stack = [];
    let pairs = {
        "]":"[",
        "}":"{",
        ")":"("
    }

    for(let char of s){
        if(char == "{" || char == "(" || char == "["){
            stack.push(char);
        } else {
            if(stack.pop() !== pairs[char]){
                return false;
            }
        }
    }
    return stack.length === 0;
};

// Time Complexity: 
// Space Complexity: 

// Test cases
