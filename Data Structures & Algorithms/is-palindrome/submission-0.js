class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // const str = s.split(" ").join('');
        const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        for(let i = 0; i < Math.floor(str.length / 2) ; i ++) {
            const element = str[i];
            const mirror = str[(str.length -1 - i)]
            if(element !== mirror) {
                return false
            }
        }
        return true
    }
}
