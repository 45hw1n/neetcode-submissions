class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numSet = new Set();
        for(let i = 0; i < nums.length; i++) {
            const num = nums[i]
            if(numSet.has(num)) {
                return true
            }
            numSet.add(num)
        }
    
        return false
    }
}
