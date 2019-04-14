/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let set = new Set();
    
    for(let i=0; i<nums.length; i++) {
        if(set.has(target-nums[i])) {
            return [nums.indexOf(target-nums[i]), i]
        }
        set.add(nums[i]);
    }
};