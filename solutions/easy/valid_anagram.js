/**
 * Problem: Valid Anagram
 * Difficulty: easy
 * Link: https://leetcode.com/problems/valid-anagram/
 * Type: map
 * 
 * Description:
 * [Add problem description here]
 *
 * Example:
 * [Add example input/output here]
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 */

/**
 * Your solution goes here
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    let map = new Map();

    for(let i=0; i<s.length; i++){
        map.set(s[i], (map.get(s[i]) || 0) + 1);
        map.set(t[i], (map.get(t[i]) || 0) - 1);
    }

    for(let [key, value] of map){
        if(value !== 0) return false;
    }

    return true;
};

function isAnagram2(s,t) {
    return s.split("").sort().join("") === t.split("").sort().join("");
}

// Time Complexity: 
// Space Complexity: 

// Test cases
