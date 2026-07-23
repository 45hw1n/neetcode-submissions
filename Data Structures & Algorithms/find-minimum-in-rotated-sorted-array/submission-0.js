class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        const sortedArr = nums.sort((a, b) => a - b);
        return sortedArr[0];
    }
}
