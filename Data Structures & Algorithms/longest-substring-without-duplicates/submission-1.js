class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let maxLength = 0;
        let set = new Set();

        for (let right = 0; right < s.length; right++) {
            // duplicate?
            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }

            // current character is now unique
            set.add(s[right]);

            // calculate current window
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength
    }
}
