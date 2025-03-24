/**
 * Problem: Remove Element
 * Difficulty: easy
 * Link: https://leetcode.com/problems/remove-element
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
var removeElement = function(nums, val) {
  let k = 0;
  
  for(let i = 0; i<nums.length;i++){
    if(nums[i] !== val){
        nums[k] = nums[i];
        k++;
    }
  }

  return k;
};

// Time Complexity: O(n)
// Space Complexity: O(1)

// Test cases
