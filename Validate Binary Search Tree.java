class Solution {
    public boolean isValidBST(TreeNode root) {
        double left_child_val = -Double.MAX_VALUE;
        Stack<TreeNode> stack = new Stack();
        while(!stack.isEmpty() || root != null){
            while(root != null){
                stack.push(root);
                root = root.left;
        }
                
            root = stack.pop();
            if(root.val <= left_child_val)
                return false;
            left_child_val = root.val;
            root = root.right;
            }
        
        return true; 
        
    }
}