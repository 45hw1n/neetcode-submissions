class Heap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop() {
        if (this.size() === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();

        return top;
    }

    bubbleUp() {
        let index = this.size() - 1;

        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            if (this.compare(this.heap[index], this.heap[parent])) {
                [this.heap[index], this.heap[parent]] = [
                    this.heap[parent],
                    this.heap[index],
                ];
                index = parent;
            } else {
                break;
            }
        }
    }

    bubbleDown() {
        let index = 0;

        while (true) {
            let left = index * 2 + 1;
            let right = index * 2 + 2;
            let target = index;

            if (
                left < this.size() &&
                this.compare(this.heap[left], this.heap[target])
            ) {
                target = left;
            }

            if (
                right < this.size() &&
                this.compare(this.heap[right], this.heap[target])
            ) {
                target = right;
            }

            if (target === index) break;

            [this.heap[index], this.heap[target]] = [
                this.heap[target],
                this.heap[index],
            ];

            index = target;
        }
    }
}

class MedianFinder {
    constructor() {
        // Max Heap
        this.small = new Heap((a, b) => a > b);

        // Min Heap
        this.large = new Heap((a, b) => a < b);
    }

    addNum(num) {
        this.small.push(num);

        // Move largest from small -> large
        this.large.push(this.small.pop());

        // Balance heaps
        if (this.large.size() > this.small.size()) {
            this.small.push(this.large.pop());
        }
    }

    findMedian() {
        if (this.small.size() > this.large.size()) {
            return this.small.peek();
        }

        return (this.small.peek() + this.large.peek()) / 2;
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 *
 * const obj = new MedianFinder();
 * obj.addNum(num);
 * const median = obj.findMedian();
 */