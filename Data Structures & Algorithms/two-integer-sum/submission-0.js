class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = new Map();
        for(let i = 0; i < nums.length ; i++) {
            const element = nums[i];
            const numToFind = target - element;
            if(numsMap.has(numToFind)) {
                return [i, numsMap.get(numToFind)]
            } else {
                numsMap.set(element, i)
            }
        }
    }
}
