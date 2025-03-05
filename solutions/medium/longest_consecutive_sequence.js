/**
 * Problem: Longest Consecutive Sequence
 * Difficulty: medium
 * Link: https://leetcode.com/problems/longest-consecutive-sequence/
 * Type: set
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
var longestConsecutive = function(nums) {
    // create set for O(1) lookup
    let set = new Set(nums);
    let max = 0;

    // iterate the set
    for(let num of set){

        // if num-1 does not exist, meaning it's the first in a sequence
        if(!set.has(num-1)){
            let currentNum = num;
            let currentLength = 1;

            // Count consecutive numbers
            while(set.has(currentNum+1)){
                currentNum++;
                currentLength++;
            }

            // update the max length
            max = Math.max(max, currentLength);
        }
    }
    return max;
};

// Time Complexity: O(n)
// Space Complexity: O(n) for the set

// Test cases
