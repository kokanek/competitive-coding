/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let dp = [];
    dp[0] = 1;
    
    let global_max = 1;
    for(let i=1; i<nums.length; i++) {
        dp[i] = 1;
        for(let j=0; j<i; j++) {
            //console.log(nums[i], " ", nums[j]);
            if(nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j]+1);
            }
        }
        global_max = Math.max(dp[i], global_max);
    }
    
    return global_max;
};