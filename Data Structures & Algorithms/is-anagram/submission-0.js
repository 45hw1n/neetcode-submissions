class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        const strMap = new Map();
        for (let i = 0; i < s.length; i++) {
            const element = s[i];
            if (strMap.has(element)) {
                const count = strMap.get(element);
                strMap.set(element, count + 1);
            } else {
                strMap.set(element, 1);
            }
        }

        for(let j = 0; j < t.length ; j ++) {
            const element = t[j]
            const isPresent = strMap.has(element)
            if(!isPresent) {
                return false
            } else {
                const count = strMap.get(element);
                const updatedCount = count - 1;
                if(updatedCount > 0) {
                    strMap.set(element, updatedCount)
                } else {
                    strMap.delete(element)
                }
            }
        }

        return strMap.size === 0
    }
}
