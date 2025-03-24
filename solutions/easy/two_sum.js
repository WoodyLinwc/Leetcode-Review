/**
 * Problem: Two Sum
 * Difficulty: easy
 * Link: https://leetcode.com/problems/two-sum/
 * Type: array
 * 
 * Description:
 * [Add problem description here]
 *
 * Example:
 * [Add example input/output here]
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 */

/**
 * Your solution goes here
 */
var twoSum = function(nums, target) {
    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        let compliment = target - nums[i];

        if(map.has(compliment)) return [map.get(compliment), i];

        map.set(nums[i],i);
    }
    return [];
};

// Time Complexity: O(n)
// Space Complexity: O(n)

// Test cases
