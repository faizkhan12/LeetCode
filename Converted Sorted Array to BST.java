/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public TreeNode sortedArrayToBST(int[] nums) {
         if(nums.length == 0)
            return null;
        return constructTree(nums,0,nums.length - 1);
    }  
    public TreeNode constructTree(int[] num,int left,int right){
        if(left > right)
            return null;
        int midpoint = left + (right - left)/2;
        TreeNode node = new TreeNode(num[midpoint]);
        node.left = constructTree(num,left,midpoint-1);
        node.right = constructTree(num,midpoint+1,right);
        return node;
    }
}