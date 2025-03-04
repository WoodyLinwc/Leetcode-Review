/**
 * Problem: Top K Frequent Elements
 * Difficulty: medium
 * Link: https://leetcode.com/problems/top-k-frequent-elements/
 * Type: map
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
var topKFrequent = function(nums, k) {
    //count the occurrence 
    let map = new Map();
    for(let n of nums){
        map.set(n, (map.get(n) || 0) + 1);
    }

    //convert map to array and sort it based on freq in descending order
    let sortArray = [...map.entries()].sort((a,b) => b[1] - a[1]);

    // output elements to res
    let res = [];
    for(let i = 0; i < k; i++){
        res.push(sortArray[i][0]);
    }
    return res;
};
// Time Complexity: O(nlogn) sorting
// Space Complexity: O(n)

// Test cases
