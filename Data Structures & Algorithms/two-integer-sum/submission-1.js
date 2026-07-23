class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = new Map();
        for(let i = 0 ; i < nums.length ; i++) {
            const number = nums[i];
            const numberToCheck = target - number
            if(numsMap.has(numberToCheck)) {
                const numIndex = numsMap.get(numberToCheck)
                return [i , numIndex]
            } else {
                numsMap.set(number, i)
            }
        }
    }
}
