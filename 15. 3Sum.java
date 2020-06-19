class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
     Arrays.sort(nums);
        List<List<Integer>> res = new ArrayList<>();
        if(nums == null || nums.length == 0){
            return res;
        }
        for(int i = 0;i<nums.length;i++){
           int left = i + 1;
            int right = nums.length - 1;
            while(left < right){
                int sum = nums[i] + nums[left] + nums[right];
                if(sum == 0){
                    List<Integer> res1 = new ArrayList<>();
                    res1.add(nums[i]);
                    res1.add(nums[left]);
                    res1.add(nums[right]);
                    res.add(res1);
                    int leftValue = nums[left];
                    while(left < nums.length && nums[left] == leftValue){
                        left+=1;
                        }
                    int rightValue = nums[right];
                    while(right > left && nums[right] == rightValue){
                        right-=1;
                        }
            }else if(sum < 0){
                    left+=1;
                }else{
                    right-=1;
                }
        }
            while(i+1 < nums.length && nums[i] == nums[i+1]){
                i+=1;
                }
    }
        return res;
    }

}