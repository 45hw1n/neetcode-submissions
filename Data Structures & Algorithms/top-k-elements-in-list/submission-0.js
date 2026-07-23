class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsMap = new Map();
        const result = [];
        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            if (numsMap.has(element)) {
                const updatedValue = numsMap.get(element) + 1;
                numsMap.set(element, updatedValue);
            } else {
                numsMap.set(element, 1);
            }
        }

        const sortedEntries = Array.from(numsMap.entries()).sort((a, b) => b[1] - a[1]);
        for (let i = 0; i < k; i++) {
            result.push(sortedEntries[i][0]);
        }

        return result;
    }
}
