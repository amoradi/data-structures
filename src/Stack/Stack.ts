type Items = { [item: number]: any };

interface Stack {
  isEmpty(): boolean;
  toString(): string;
  push(item: any): void;
  pop(): any;
  peek(): any;

  // alias methods
  front: typeof Stack.prototype.peek;
}

// An object-based approach to a Stack
class Stack implements Stack {
  private items: Items;
  private count: number;

  constructor() {
    this.items = {};
    this.count = 0;
  }

  // returns [base, ..., top]
  get stack() {
    const stack: Array<any> = [];

    Object.entries(this.items).forEach(([index, value]) => {
      stack[parseInt(index)] = value;
    });

    return stack;
  }

  get size() {
    return this.count;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  isEmpty() {
    return this.count === 0;
  }

  toString() {
    return JSON.stringify(this.stack);
  }

  peek() {
    if (this.isEmpty()) return undefined;

    if (this.count > 0) {
      return this.items[this.count - 1];
    }
  }

  pop() {
    if (this.isEmpty()) return undefined;

    const top = this.items[this.count - 1];

    this.count--;
    delete this.items[this.count];
    return top;
  }

  push(item: any) {
    this.items[this.count] = item;
    this.count++;
  }
}

// alias methods
Stack.prototype.front = Stack.prototype.peek;

export { Stack };
