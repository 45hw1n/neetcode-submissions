class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strMap = new Map();
        for (let i = 0; i < strs.length; i++) {
            const element = strs[i];
            const sortedStr = element.split('').sort().join('');
            if (strMap.has(sortedStr)) {
                const currentValue = strMap.get(sortedStr);
                currentValue.push(element);
                strMap.set(sortedStr, currentValue);
            } else {
                strMap.set(sortedStr, [element]);
            }
        }
        return [...strMap.values()];
    }
}