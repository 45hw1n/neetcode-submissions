class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = [];

        // Pass 1: store product of everything to the LEFT
        let leftProduct = 1;

        for (let i = 0; i < nums.length; i++) {
            result[i] = leftProduct;
            leftProduct = leftProduct * nums[i];
        }

        // Pass 2: multiply product of everything to the RIGHT
        let rightProduct = 1;

        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] = result[i] * rightProduct;
            rightProduct = rightProduct * nums[i];
        }

        return result;
    }
}

