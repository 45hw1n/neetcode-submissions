class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums.length) {
            return 0
        }
        const sortedNums = nums.sort((a, b) => a - b);
        let largestSeq = 1;
        let currentSeq = 1;
        for (let i = 0; i < sortedNums.length; i++) {
            const currentElement = sortedNums[i];
            const nextElement = sortedNums[i + 1];
            const diff = nextElement - currentElement;
            if (diff === 1) {
                currentSeq = currentSeq + 1 ;
            } else if (diff === 0) {
                continue;
            } else {
                if (currentSeq > largestSeq) {
                    largestSeq = currentSeq;
                }
                currentSeq = 1;
            }
        }
        return largestSeq;
    }
}
