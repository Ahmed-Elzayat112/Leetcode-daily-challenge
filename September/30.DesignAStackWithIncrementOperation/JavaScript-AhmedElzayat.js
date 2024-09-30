"use strict";
class CustomStack {
    stack;
    idx;
    maxSize;
    constructor(maxSize, stack = [], idx = -1) {
        this.stack = stack;
        this.idx = idx;
        this.maxSize = maxSize;
    }
    push(x) {
        if (this.idx < this.maxSize - 1) {
            this.idx++;
            this.stack[this.idx] = x;
        }
    }
    pop() {
        if (this.idx === -1) {
            return -1;
        }
        const res = this.stack[this.idx];
        this.idx--;
        return res;
    }
    increment(k, val) {
        for (let i = 0; i < Math.min(k, this.idx + 1); i++) {
            this.stack[i] += val;
        }
    }
}
// Your CustomStack object will be instantiated and called as such:
var obj = new CustomStack(3);
obj.push(1);
obj.push(2);
console.log(obj.pop());
obj.push(2);
obj.push(3);
obj.push(4);
obj.increment(5, 100);
obj.increment(2, 100);
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());
