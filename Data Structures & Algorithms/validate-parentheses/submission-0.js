const openCloseMap = {
    "{": "}",
    "[": "]",
    "(": ")",
};

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isValid(s) {
        const stack = [];
        for (let i = 0; i < s.length; i++) {
            const element = s[i];
            const correspondingClose = openCloseMap[element];
            if (correspondingClose) {
                stack.push(correspondingClose);
            } else {
                const lastElement = stack[stack.length - 1];
                if (lastElement === element) {
                    stack.pop();
                    continue;
                }
                return false;
            }
        }
        return stack.length === 0;
    }
}
