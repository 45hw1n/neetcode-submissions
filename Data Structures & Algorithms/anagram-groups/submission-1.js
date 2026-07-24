class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strMap = new Map();
        for (let i = 0; i < strs.length; i++) {
            const element = strs[i];
            const sortedElement = [...element].sort().join("");
            if (strMap.has(sortedElement)) {
                const strArr = strMap.get(sortedElement);
                strArr.push(element);
                strMap.set(sortedElement, strArr);
            } else {
                strMap.set(sortedElement, [element]);
            }
        }
        const grpAnagrams = [];
        for (const value of strMap.values()) {
            grpAnagrams.push(value);
        }
        return grpAnagrams
    }
}
