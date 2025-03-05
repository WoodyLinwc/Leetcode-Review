/**
 * Problem: Longest Substring Without Repeating Characters
 * Difficulty: medium
 * Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Type: string
 * 
 * Description:
 * [Add problem description here]
 *
 * Example:
 * [Add example input/output here]
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 */

/**
 * Your solution goes here
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let max = 0;
    let left = 0;

    // sliding window approach
    for(let right = 0; right < s.length; right++){
        // current char 
        let char = s.charAt(right);

        // if char exist in map, move left pointer
        if(map.has(char)){
            left = Math.max(left, map.get(char)+1)
        }

        // update the max length
        max = Math.max(max, right-left+1);

        // store current char position
        map.set(char, right);
    }
    return max;
};

// Time Complexity: O(n)
// Space Complexity: O(n) map to store

// Test cases
