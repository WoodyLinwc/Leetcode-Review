/**
 * Problem: Contains Duplicate
 * Difficulty: easy
 * Link: https://leetcode.com/problems/contains-duplicate/
 * Type: set
 * 
 * Description:
 * [Add problem description here]
 *
 * Example:
 * [Add example input/output here]
 * 
 * Input: nums = [1,2,3,1]
 * Output: true
 */

/**
 * Your solution goes here
 */

var containsDuplicate = function(nums) {
    return nums.length !== [...new Set(nums)].length;
};


var containsDuplicate = function(nums) {
    let map = new Map();

    for(let n of nums){
        if(map.has(n)){
            return true;
        }
        map.set(n,1);
    }
    return false;
};

// Time Complexity: 
// Space Complexity: 

// Test cases
