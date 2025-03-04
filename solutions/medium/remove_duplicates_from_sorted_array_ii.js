/**
 * Problem: Remove Duplicates from Sorted Array II
 * Difficulty: medium
 * Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii
 * Type: array
 * 
 * Description:
 * [Add problem description here]
 *
 * Example:
 * [Add example input/output here]
 * 
 * Input: nums = [1,1,1,2,2,3]
 * Output: 5, nums = [1,1,2,2,3,_]
 */

/**
 * Your solution goes here
 */
var removeDuplicates = function(nums) {
    let k = 2;

    for(let i = 2; i < nums.length; i++){
        if(nums[i] !== nums[k-2]){
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

// Time Complexity: 
// Space Complexity: 

// Test cases
