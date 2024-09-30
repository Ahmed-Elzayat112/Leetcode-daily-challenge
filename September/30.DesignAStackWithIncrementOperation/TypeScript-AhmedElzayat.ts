class CustomStack {
  private maxSize: number;
  constructor(maxSize: number, private stack: number[] = [], private idx: number = -1) {
    this.maxSize = maxSize;
  }

  push(x: number): void {
    if (this.idx < this.maxSize - 1) {
      this.idx++;
      this.stack[this.idx] = x;
    }
  }

  pop(): number {
    if (this.idx === -1) {
      return -1;
    }

    const res = this.stack[this.idx];
    this.idx--;
    return res;
  }

  increment(k: number, val: number): void {
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
