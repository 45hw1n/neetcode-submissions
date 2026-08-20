class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            const middleValue = nums[mid];
            const leftValue = nums[left];
            const rightValue = nums[right];

            if (middleValue === target) {
                return mid;
            }

            // Left half is sorted
            if (leftValue <= middleValue) {
                if (leftValue <= target && target < middleValue) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }

            // Right half is sorted
            else {
                if (middleValue < target && target <= rightValue) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }

        return -1;
    }
}
