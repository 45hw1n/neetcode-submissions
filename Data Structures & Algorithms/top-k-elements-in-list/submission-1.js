class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            numMap.set(element, (numMap.get(element) || 0) + 1);
        }
        const sorted = [...numMap.entries()].sort((a, b) => b[1] - a[1]);

        // Return first k numbers
        return sorted.slice(0, k).map(([num]) => num);
    }
}
