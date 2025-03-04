/**
 * Problem: Linked List Cycle
 * Difficulty: easy
 * Link: https://leetcode.com/problems/linked-list-cycle/
 * Type: linked-list
 * 
 * Description:
 * [Add problem description here]
 *
 * Example:
 * [Add example input/output here]
 * Input: head = [3,2,0,-4], pos = 1
 * Output: true
 */

/**
 * Your solution goes here
 */
var hasCycle = function(head) {
    slow = head;
    fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast) return true;
    }

    return false;
};

// Time Complexity: 
// Space Complexity: 

// Test cases
