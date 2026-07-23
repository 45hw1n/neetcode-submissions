class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        const prefix = "#";

        for (let i = 0; i < strs.length; i++) {
            const element = strs[i];
            const encodedElement = `${element.length}${prefix}${element}`;
            encoded = `${encoded}${encodedElement}`;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = [];
        let i = 0;

        while (i < str.length) {
            // Find where the length ends
            let j = i;
            while (str[j] !== "#") {
                j++;
            }

            // Read the length
            const length = Number(str.slice(i, j));

            // Read the actual word
            const word = str.slice(j + 1, j + 1 + length);

            decoded.push(word);

            // Move to the next encoded string
            i = j + 1 + length;
        }

        return decoded;
    }
}
