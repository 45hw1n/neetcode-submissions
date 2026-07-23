class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // const formattedString = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        // for (let i = 0; i < Math.floor(formattedString.length); i++) {
        //     const currentElement = formattedString[i];
        //     const mirrorElementIndex = formattedString.length - (i + 1);
        //     const mirrorElement = formattedString[mirrorElementIndex];
        //     console.log(currentElement, "::", currentElement);
        //     if (currentElement !== mirrorElement) {
        //         return false;
        //     }
        // }
        // return true;
        const formattedString = s.toLowerCase().replace(/[^a-z0-9]/g, "");

        let left = 0;
        let right = formattedString.length - 1;
        while (left < right) {
            const leftElement = formattedString[left];
            const rightElement = formattedString[right];
            if (leftElement !== rightElement) {
                return false;
            }
            left = left + 1;
            right = right - 1;
        }
        return true;
    }
}
