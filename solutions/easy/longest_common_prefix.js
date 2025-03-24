/**
 * Problem: Longest Common Prefix
 * Difficulty: easy
 * Link: https://leetcode.com/problems/longest-common-prefix
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
var longestCommonPrefix = function(strs) {
    strs.sort();
    let first = strs[0];
    let last = strs[strs.length-1];

    let i = 0;
    while(i < first.length && first[i] === last[i]){
        i++;
    }

    return first.slice(0,i);
};


// Time Complexity: Sorting takes O(mlogm) where m is the number of string, 
// Space Complexity: O(1)

// Test cases
