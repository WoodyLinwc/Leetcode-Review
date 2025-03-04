/**
 * Problem: Binary Tree Inorder Traversal
 * Difficulty: easy
 * Link: https://leetcode.com/problems/binary-tree-inorder-traversal/
 * Type: tree
 * 
 * Description:
 * [Add problem description here]
 *
 * Example:
 * [Add example input/output here]
 * Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
 * Output: [4,2,6,5,7,1,3,9,8]
 */

/**
 * Your solution goes here
 */
var inorderTraversal = function(root) {
    let result = [];

    function traverse(node) {
        if (!node) return;  // Base case: If node is null, return

        traverse(node.left);   // Visit left subtree
        result.push(node.val); // Visit root
        traverse(node.right);  // Visit right subtree
    }

    traverse(root);
    return result;
};

// Time Complexity: 
// Space Complexity: 

// Test cases
