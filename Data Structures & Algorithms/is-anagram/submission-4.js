class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const strMap = new Map();
        if(s.length !== t.length) {
            return false
        }
        for (let i = 0; i < s.length; i++) {
            const element = s[i];
            const elementVal = strMap.get(element) || 0;
            strMap.set(element, elementVal + 1);
        }

        for (let j = 0; j < t.length; j++) {
            const element = t[j];
            const elementVal = strMap.get(element);
            
            if (elementVal > 1) {
                strMap.set(element, elementVal - 1);
            } else {
                strMap.delete(element);
            }
        }

        return strMap.size === 0;
    }
}
