/**
 * Problem: Maximum Subarray
 * Difficulty: medium
 * Link: https://leetcode.com/problems/maximum-subarray/
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
var maxSubArray = function(nums) {
    let sum = 0;
    let max = nums[0];

    // let start = 0, end = 0, tempStart = 0;

    for(let i = 0; i < nums.length; i++){
        sum += nums[i];

        if(sum > max){
            max = sum;
            // start = tempStart;
            // end = i;
        }

        if(sum < 0){
            sum = 0;
            // tempStart = i + 1;
        }
    }
    return max;
    // return {
    //     max: max,
    //     array: nums.slice(start, end+1)
    // };
};

// Time Complexity: 
// Space Complexity: 

// Test cases
