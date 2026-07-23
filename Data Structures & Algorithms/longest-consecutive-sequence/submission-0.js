class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;

        for (const num of set) {
            // Only start if num is the beginning of a sequence
            if (!set.has(num - 1)) {
                let current = num;
                let streak = 1;

                while (set.has(current + 1)) {
                    current++;
                    streak++;
                }

                longest = Math.max(longest, streak);
            }
        }

        return longest;
    }
}
