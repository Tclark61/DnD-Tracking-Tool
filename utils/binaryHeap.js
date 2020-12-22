export default class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        this._bubbleUp(value);
    }

    _bubbleUp(val) {
        let idx = this.values.length - 1;
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx];
            if (val <= parent) break;
            this.values[parentIdx] = val;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this._sinkDown();
        }
        return max;
    }

    _sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const el = this.values[0];

        while (true) {
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if(leftChild > el) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild > el) ||
                 (swap !== null && rightChild > leftChild)
                 ){
                     swap = rightChildIdx;
                 }
            }           

            if(swap === null) break;

            this.values[idx] = this.values[swap];
            this.values[swap] = el;
            idx = swap;
        }
    }

}
