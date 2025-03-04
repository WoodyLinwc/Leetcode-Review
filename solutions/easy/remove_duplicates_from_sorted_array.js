/**
 * Problem: Remove Duplicates from Sorted Array
 * Difficulty: easy
 * Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array
 * Type: array
 * 
 * Description:
 * [Add problem description here]
 *
 * Example:
 * [Add example input/output here]
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 * 
 * 
 */

/**
 * Your solution goes here
 */
var removeDuplicates = function(nums) {
    let k = 1;

    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[k-1]){
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

// Time Complexity: O(n)
// Space Complexity: O(1)

// Test cases
