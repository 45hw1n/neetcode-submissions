class MedianFinder {
    constructor() {
        this.arr = [];
    }

    /**
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        const integer = parseInt(num);

        if (!isNaN(integer)) {
            this.arr.push(integer);
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        this.arr.sort((a, b) => a - b);

        const n = this.arr.length;
        const mid = Math.floor(n / 2);

        // Odd number of elements
        if (n % 2 !== 0) {
            return this.arr[mid];
        }

        // Even number of elements
        return (this.arr[mid - 1] + this.arr[mid]) / 2;
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * const obj = new MedianFinder();
 * obj.addNum(num);
 * const param_2 = obj.findMedian();
 */
